import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import { FindDemandNumByAxe } from 'API/Statistics/find.statistics';
import { Item } from 'interfaces/data/statistics.interface';

interface IStruct {
    labels: String[],
    data: String[]
}

export const DemandByAxe = () => {
    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        let struct: IStruct = {
            labels: [],
            data: []
        }

        const result: any = await FindDemandNumByAxe();

        if (result.status === 200) {
            if (result.response) {
                result.response.Statistics.Item.sort(function (a:any, b:any) {
                    return b.qtd - a.qtd;
                });

                result.response.Statistics.Item.forEach((item: Item) => {
                    if (struct.data.length < 4) {
                        struct.labels.push(item.name);
                        struct.data.push(item.qtd);
                    }
                })
            }

            new Chart('chart', {
                type: 'bar',
                data: {
                    labels: struct.labels,
                    datasets: [{
                        label: 'Nº de Demandas',
                        data: struct.data,
                        borderColor: "#183b5e",
                        backgroundColor: "rgba(24, 59, 94, 0.7)",
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    }
    return (
        <div style={{ width: "85%" }}>
            <canvas id="chart"></canvas>
        </div>
    )
}
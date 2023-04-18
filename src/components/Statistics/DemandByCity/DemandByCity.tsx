import { FindDemandByCity } from "API/Statistics/find.statistics";
import Chart from "chart.js/auto";
import { useEffect } from "react";

interface IStruct {
    labels: String[],
    data: String[]
}

export const DemandByCity = () => {
    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        let struct: IStruct = {
            labels: [],
            data: []
        }

        const result: any = await FindDemandByCity();

        if (result.status === 200 && result.response.Statistics.Item) {
            if (result.response) {
                result.response.Statistics.Item.sort(function (a:any, b:any) {
                    return b.qtd - a.qtd;
                });
                result.response.Statistics.Item.forEach((item: any) => {
                    if(struct.data.length < 4){
                        struct.labels.push(item.name);
                        struct.data.push(item.qtd);
                    }
                })
            }

            new Chart('chart1', {
                type: 'pie',
                data:{
                    labels: struct.labels,
                    datasets: [
                      {
                        label: 'Quantidade',
                        data: struct.data,
                        backgroundColor: ["#183b5e","#ffcd56","#4bc0c0","#ff6384"],
                      }
                    ]
                  },
                options: {
                    responsive: true,
                }
            });
        }
    }
    return (
        <div style={{ width: "60%" }}>
            <canvas id="chart1"></canvas>
        </div>
    );
}
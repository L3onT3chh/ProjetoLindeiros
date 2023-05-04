import addFile from '../../assets/img/docsext/addfile.png';
import check from '../../assets/img/check.png';
import { MdClose } from 'react-icons/md';
import { useRef, useState } from 'react';
import { showErrorMessage } from 'util/function';
import { allowedExt, apiUrl, maxUploadSize } from 'config';
import { FileContainer } from './style';
import { Photos } from 'interfaces/data/news.interface';
import { FaTimes } from 'react-icons/fa';

interface IProps {
    file: File[] | undefined;
    setFile: any;
    isMultiple: boolean;
    fileList?: any;
    setFileList?: any;
}

export const UploadBox = ({ file, setFile, isMultiple, fileList, setFileList }: IProps) => {
    let input: any = useRef("");
    const [qtd, setQtd] = useState(0);
    const [size, setSize] = useState(0);
    const [imgPreview, setImgPreview] = useState<string>();

    const bytesToSize = (bytes: any, seperator = "") => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        if (bytes == 0) return 'n/a'
        const i = Math.floor(Math.log(bytes) / Math.log(1024))
        if (i === 0) return `${bytes}${seperator}${sizes[i]}`
        return `${(bytes / (1024 ** i)).toFixed(1)}${seperator}${sizes[i]}`
    }

    const cleanFile = () => {
        setFile(undefined);
        input.current.value = "";
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.files);
        if (e.target.files) {
            let maxSize = 0;
            for (let i = 0; i < e.target.files.length; i++) {
                maxSize += e.target.files[i].size;
                if (e.target.files[i].size > maxUploadSize) {
                    cleanFile()
                    showErrorMessage(`Selecione um arquivo até ${bytesToSize(maxUploadSize)}`, "error");
                    return;
                }
                if (!allowedExt.includes(e.target.files[i].type)) {
                    cleanFile()
                    showErrorMessage("Tipo de arquivo não permitido", "error");
                    return;
                }
            }
            setSize(maxSize);
            setFile(e.target.files);
            setQtd(e.target.files.length);
        }
    }

    const deletePhotoFromList = (id: string) => {
        // eslint-disable-next-line no-restricted-globals
        if (id && confirm("Tem certeza que deseja realizar essa ação?") && setFileList) {
            if(fileList.length === 1){
                showErrorMessage("Uma notícia deve possuir no minimo uma foto", "error");
                return;
            }
            let temp = fileList.filter((item: any) => item.id !== id);
            setFileList(temp);
        }
    }

    return (
        <>
            <FileContainer onClick={() => (!file) ? input.current.click() : ''} style={{ borderColor: (file) ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)', cursor: (file) ? 'initial' : 'pointer' }}>
                {imgPreview === undefined ?
                    (
                        <>
                            <img src={(file) ? check : addFile} alt="upload de arquivo" width="50" />
                            {file && (
                                <div className="fileInfo">
                                    <div className="left">
                                        <img src={addFile} alt="upload de arquivo" width="40" height="40" />
                                        <div className="text">
                                            {isMultiple ?
                                                (
                                                    <p>{qtd} arquivos selecionados</p>
                                                ) :
                                                (
                                                    <p>{(file[0].name.length > 28) ? file[0].name.toString().substring(0, 28) + '...' : file[0].name}</p>
                                                )
                                            }
                                            <span>{bytesToSize(size, "")}</span>
                                        </div>
                                    </div>
                                    <button className="btnRemoveFile" style={{ background: 'none' }}><MdClose size={25} onClick={() => cleanFile()} /></button>
                                </div>
                            )
                            }
                            {!file && (
                                <>
                                    <p>Selecione um arquivo</p>
                                    <span>são permitidos pdf, xls, jpg, png</span>
                                </>
                            )
                            }
                            {isMultiple ?
                                (
                                    <input type="file" onChange={(e) => handleFileUpload(e)} ref={input} multiple hidden />
                                ) :
                                (
                                    <input type="file" onChange={(e) => handleFileUpload(e)} ref={input} hidden />
                                )
                            }
                        </>
                    ) :
                    (
                        <div className='imgBigPicture' style={{ backgroundImage: `url(${imgPreview})` }} onClick={(e) => e.stopPropagation()}>
                            <button onClick={(e) => { setImgPreview(undefined); e.stopPropagation() }}><FaTimes size={20} color='#fff' /> Fechar</button>
                        </div>
                    )
                }
            </FileContainer>
            {fileList !== undefined && fileList.map((item: Photos, i:number) => (
                <>
                {
                    fileList[i].id === item.id &&
                        (
                            <div className="fileInfo" style={{ paddingLeft: 0, width: "100%" }}>
                                <div className="left">
                                    <div className="imgpreview" style={{ backgroundImage: `url(${apiUrl + "/" + item.path + item.name})` }} onClick={() => setImgPreview(apiUrl + "/" + item.path + item.name)}></div>
                                    <div className="text">
                                        <p>{item.name.toString().substring(0, 28) + '...'}</p>
                                        <span style={{ fontSize: "14px", opacity: "0.8" }}>{item.extension}</span>
                                    </div>
                                </div>
                                <button type='button' className="btnRemoveFile" style={{ background: 'none' }} onClick={() => { deletePhotoFromList(item.id) }}><MdClose size={25} onClick={() => cleanFile()} /></button>
                            </div>
                        )

                }
                </>
            ))
            }
        </>
    );
}
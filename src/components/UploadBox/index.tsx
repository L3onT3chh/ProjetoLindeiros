import addFile from '../../assets/img/docsext/addfile.png';
import check from '../../assets/img/check.png';
import { MdClose } from 'react-icons/md';
import { useRef, useState } from 'react';
import { showErrorMessage } from 'util/function';
import { allowedExt, maxUploadSize } from 'config';
import { FileContainer } from './style';

interface IProps {
    file: File[] | undefined;
    setFile: any;
    isMultiple: boolean;
}

export const UploadBox = ({ file, setFile, isMultiple }: IProps) => {
    let input: any = useRef("");
    const [qtd, setQtd] = useState(0);
    const [size, setSize] = useState(0);

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

    return (
        <FileContainer onClick={() => (!file) ? input.current.click() : ''} style={{ borderColor: (file) ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.1)', cursor: (file) ? 'initial' : 'pointer' }}>
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
        </FileContainer>
    );
}
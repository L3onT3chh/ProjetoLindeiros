/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/react-in-jsx-scope */
import { ContainerInputFile } from "components/style";

export function InputFile() {
  return (
    <ContainerInputFile>
      <input type="file" name="file" id="file_id" />
      <label htmlFor="file_id">Envie o seu arquivo</label>
    </ContainerInputFile>
  );
}

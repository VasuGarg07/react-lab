interface Props {
  shadow: (string | number)[]
}
const CodeOutput = ({ shadow }: Props) => {
  return (
    <div className='paneChild'>
      <div className='label'>
        <span>CSS Output</span>
      </div>

      <div className='codeOutput'>
        box-shadow: {
          shadow.map((element: string | number) => {
            if (typeof element === 'number') {
              return element + "px";
            }
            return `${element}`;
          }).join(" ")
        };
      </div>
    </div>
  )
}

export default CodeOutput
import './Time.css'

const Time = ({escolas, corSecundaria, corPrimaria}) => {
  const css = {backgroundColor: corSecundaria}
  const border = {borderColor: corPrimaria}
    return (
      <section className='time' style={css}>
            <h3 style={border}>{escolas}</h3>
      </section>

    );
}

export default Time;

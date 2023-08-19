import Card from '../Card/Card';
import './Time.css'

//'https://github.com/gustavoguke.png'
const Time = ({ escolas, corSecundaria, corPrimaria, colaboradores }) => {

  const css = { backgroundColor: corSecundaria }
  const border = { borderColor: corPrimaria }
  return (
    (colaboradores.length > 0) ?
      <section className='time' style={css}>
        <h3 style={border}>{escolas}</h3>
        <div className='colaboradores'>
          {colaboradores.map(colaborador => <Card cordFundo={corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
        </div>
      </section>
      : ''
  );
}

export default Time;

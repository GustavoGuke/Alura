import { styled } from 'styled-components';
import tagsJson from './tags.json'


const TagContainer = styled.section`
    display: flex;
    margin-top:50px;
    gap:20px;
`

const ButtonTag = styled.button`
    font-size: 24px;
    color: #FFFFFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
`
const TituloTag = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`
const Tags = () => {
    return (
        <TagContainer>
            <TituloTag>Busque por Tags:</TituloTag>
            {tagsJson.map(tag => <ButtonTag key={tag.id}>{tag.titulo}</ButtonTag>)}
        </TagContainer>
    );
}

export default Tags;

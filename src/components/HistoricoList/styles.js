import styled from 'styled-components/native';

export const Container = styled.View` 
    margin-bottom: 5px;
    padding: 10px;
    box-shadow: 2px 2px rgba(0,0,0, 0.40);
    background-color: rgba(0,0,0, 0.02);
`;
export const Tipo = styled.View`   
    flex-direction: row;
`;
export const IconView = styled.View`   
    flex-direction: row;
    background-color: ${props => props.tipo === 'despesa' ? '#D93D40' : '#3DE0F2' } ;
    padding-bottom: 3px;
    padding-top: 3px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 7px;
`;
export const TipoText = styled.Text` 
    color: #fff;
    font-size: 16;
    font-style: italic;  
    margin-left: 10px;
`;
export const ValorText = styled.Text` 
    color: #222;
    font-size: 19px;
    font-weight: bold;
`;
export const Details = styled.Text` 
    color: #aaa;
    font-size: 12px;
    font-weight: bold;
`;
export const DateDetails = styled.Text` 
    color: #aaa;
    font-size: 10px;
    font-weight: bold;
`;
export const AreaInfo = styled.View` 
    flex-direction: row;
`;
export const BtnIcon = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    padding: 2px;
`;



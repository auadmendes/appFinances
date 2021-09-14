import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
background-color: ${Platform.OS === 'ios' ? '000066' : 'transparent'};
position: absolute;
justify-content: flex-end;
width: 100%;
height: 100%;
`;
export const Header = styled.View`
padding: 16px;
width: 100%;
height: 100%;
align-items: flex-end;
justify-content: flex-end;
background-color: #fff;
border-bottom-width: 1px;
border-color: #ddd;
`;
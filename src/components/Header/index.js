import React from 'react';
import { View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Container, ButtonMenu } from './styles';

export default function Header() {
    const navigation = useNavigation();
    return (
        <Container>
            <ButtonMenu onPress={() => navigation.toggleDrawer()}>
                <Entypo name="menu" size={24} color="#3DE0F2" />
            </ButtonMenu>
        </Container>
    );
}
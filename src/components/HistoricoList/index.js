import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/auth';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import firebase from '../../services/firebaseconection';
import { Container, Tipo, IconView, TipoText, ValorText, AreaInfo, Details, BtnIcon, DateDetails } from './styles';
import { Alert } from 'react-native';
import { isPast, format } from 'date-fns';
export default function Historico({ data }) {

    const { user } = useContext(AuthContext);
    const uid = user && user.uid;
    const [day, setDay] = useState(format(new Date, 'dd/MM/yy'));

    function handleDelete() {

        if (data.date !== day) {
            alert('Você não pode excluir uma entrada diferente do dia atual!');
            return;
        }
        Alert.alert(
            "Atenção Cuidado",
            `Você está deletando: ${data.tipo} - Categoria: ${data.categoria} - Valor: R$ ${data.valor.toFixed(2)} -  Data ${data.date}`,
            [
                {
                    text: "cancel",

                    style: "cancel"
                },
                { text: "ok", onPress: () => deleteEntry() }
            ]

        );
    }
    async function deleteEntry() {

        await firebase.database().ref('historico').child(uid).child(data.key).remove();


        //atualizar o saldo
        let valor = data.valor;
        let tipo = data.tipo;
        let user = firebase.database().ref('users').child(uid);
        await user.once('value').then((snapshot) => {
            let saldo = parseFloat(snapshot.val().saldo);

            tipo === 'despesa' ? saldo += parseFloat(valor) : saldo -= parseFloat(valor);

            user.child('saldo').set(saldo);
        })

    }
    return (
        <Container>
            <AreaInfo>
                <Tipo>
                    <IconView tipo={data.tipo}>
                        <AntDesign
                            name={data.tipo === 'despesa' ? 'downcircle' : 'upcircle'}
                            size={24}
                            color="#131313"
                        />
                        <TipoText>{data.tipo}</TipoText>
                    </IconView>
                </Tipo>
                <Tipo>
                    <IconView style={{ backgroundColor: '#BEBFBE' }}>
                        <TipoText>#{data.categoria}</TipoText>
                    </IconView>
                </Tipo>
                <BtnIcon onPress={handleDelete}>
                    <MaterialIcons name="delete-forever" size={34} color="#D93D40" />
                </BtnIcon>
            </AreaInfo>
            <AreaInfo>
                <ValorText>
                    R$ {data.valor.toFixed(2)}
                </ValorText>
            </AreaInfo>

            <Details>
                Detalhes: {data.detalhes}
            </Details>
            <DateDetails>
                {data.date}
            </DateDetails>
        </Container>
    );
}
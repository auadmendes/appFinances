import React from 'react';
import { StyleSheet } from 'react-native';
import { Picker as RNPickerSelect } from '@react-native-picker/picker';
import { PickerView } from './styles';

export default function Picker({ onChange, tipo }) {
    return (
        <PickerView>
            <RNPickerSelect style={styles.PickerM}
                selectedValue={tipo}
                onValueChange={(itemValue) => setTipo(itemValue)
                }>
                <RNPickerSelect.Item label="Receita" value="receita" />
                <RNPickerSelect.Item label="Despesa" value="despesa" />
            </RNPickerSelect>
        </PickerView>
    );
}

const styles = StyleSheet.create({
    PickerM: {
        height: 45,
        width: '90%',
        backgroundColor: '#fff',
        color: '#3DE0F2',
        borderWidth: 1,
    }
});
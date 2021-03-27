import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const CreateEmployee = () => {

    const [ name, setName ]       = useState('')
    const [ phone, setPhone ]     = useState('')
    const [ email, setEmail ]     = useState('')
    const [ salary, setSalary ]   = useState('')
    const [ picture, setPicture ] = useState('')
    const [ modal, setModal ]     = useState(false)

    return(
        <View style={ styles.root }>
            <TextInput
                label='Name'
                style={ styles.myInput }
                value={ name }
                // mode='outlined'
                theme={ theme }
                onChangeText={ text => setName(text) }
            />
            <TextInput
                label='Email'
                style={ styles.myInput }
                value={ email }
                // mode='outlined'
                theme={ theme }
                onChangeText={ text => setEmail(text) }
            />
            <TextInput
                label='Phone'
                style={ styles.myInput }
                value={ phone }
                // mode='outlined'
                keyboardType='number-pad'
                theme={ theme }
                onChangeText={ text => setPhone(text) }
            />
            <TextInput
                label='Salary'
                style={ styles.myInput }
                value={ salary }
                // mode='outlined'
                theme={ theme }
                onChangeText={ text => setSalary(text) }
            />
            <Button
                icon='upload'
                mode='contained'
                theme={ theme }
                onPress={ () => setModal(true) }>
                Upload Image
            </Button>
            <Modal
                animationType='slide'
                transparent={ true }
                visible={ modal }
                onRequestClose={ () => {
                    setModal(false)
                }}
            >
                <View style={ styles.modalView }>
                    <View style={ styles.modalButtonView }>
                        <Button
                            icon='camera'
                            mode='contained'
                            onPress={ () => console.log('pressed camera') }>
                            Camera
                        </Button>
                        <Button
                            icon='image-area'
                            mode='contained'
                            onPress={ () => console.log('pressed gallery') }>
                            Gallery
                        </Button>
                    </View>
                    <Button icon='window-close' mode='outlined' onPress={ () => setModal(false) }>
                        Cancel
                    </Button>
                </View>
            </Modal>
        </View>
    )
}

const theme = {
    colors: {
        primary: 'gray'
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    myInput: {
        margin: 10
    },
    modalButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    modalView: {
        position: 'absolute',
        bottom: 2,
        width: '100%',
        backgroundColor: 'white'
    },
})

export default CreateEmployee
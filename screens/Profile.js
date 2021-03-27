import React from 'react'
import { StyleSheet, View, Image, Text, Linking, Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Title, Card, Button } from 'react-native-paper'
import { MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons'

const Profile = () => {

    const openDial = () => {
        if (Platform.OS === "android") {
            Linking.openURL('tel:4426589354')
        } else {
            Linking.openURL('telprompt:7581004931')
        }
    }

    return(
        <View style={ styles.root }>
            <LinearGradient dolor adipisicing dolor ea incididunt officia
                colors={['#0033ff', '#6bc1ff']}
                style={{ height: "20%" }}
            />
            <View style={{ alignItems: 'center' }}>
                <Image
                    style={{ height: 100, width: 100, borderRadius: 50, marginTop: -50 }}
                    source={{ uri: 'https://images.unsplash.com/photo-1559274071-c99b6af25cbe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTMxfHxkb2d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
                />
            </View>
            <View style={{ alignItems: 'center', margin: 15 }}>
                <Title style={ styles.myTitleCard }>Vicente Neri</Title>
                <Text style={ styles.myTextCard }>Velit ut nostrud pariatur sit proident.</Text>
            </View>
            <Card
                style={ styles.myCard }
                onPress={ () => {
                    Linking.openURL('mailto:vizenthe13k@outlook.com')
                } }
            >
                <View style={ styles.cardContent }>
                    <MaterialCommunityIcons name="email-alert-outline" size={35} color="black" />
                    <Text style={ styles.myText }>Sviluppatore Web</Text>
                </View>
            </Card>
            <Card
                style={ styles.myCard }
                onPress={ () => openDial() }
            >
                <View style={ styles.cardContent }>
                    <Feather name="phone" size={24} color="black" />
                    <Text style={ styles.myTextPhone }>+52 442 658 9354</Text>
                </View>
            </Card>
            <Card style={ styles.myCard }>
                <View style={ styles.cardContent }>
                    <MaterialIcons name="attach-money" size={26} color="black" />
                    <Text style={ styles.myTextSalary }>300 Dls</Text>
                </View>
            </Card>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 20 }}>
                <Button icon='account-edit' mode='contained' theme={ theme } >
                    Edit
                </Button>
                <Button icon='delete' mode='contained' theme={ theme } >
                    Fire employee
                </Button>
            </View>
        </View>
    )
}

const theme = {
    colors: {
        primary: '#8f5674'
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    myCard: {
        margin: 5
    },
    cardContent: {
        flexDirection: 'row',
        padding: 8
    },
    myTextSalary: {
        fontSize: 18,
        marginLeft: 10,
    },
    myTitleCard: {
        color: '#FFF',
    },
    myTextCard: {
        color: '#FFF',
        fontSize: 16,
        marginBottom: 18
    },
    myText: {
        fontSize: 18,
        marginTop: 4,
        marginLeft: 5,
    },
    myTextPhone: {
        fontSize: 18,
        marginTop: 4,
        marginLeft: 15,
    },
})

export default Profile
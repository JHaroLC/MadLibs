import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Link } from 'expo-router';
import Styles from '../styles/pageone';

export default function Page() {
    const [name, setName] = React.useState("");
    const [noun, setNoun] = React.useState("");
    const [event, setEvent] = React.useState("");
    return (
        <View style={Styles.screen}>
            <View style={Styles.title}>
                <Text style={Styles.heading}>
                    Assignment  1!
                </Text>
            </View>
            <View style={Styles.description}>
                <Text style={Styles.info}>
                    Please fill in the blanks for a random story.
                </Text>
            </View>
            <View style={Styles.entries}>
                <TextInput
                    style={Styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Name"
                />
                <TextInput
                    style={Styles.input}
                    onChangeText={setNoun}
                    value={noun}
                    placeholder="Noun"
                />
                <TextInput
                    style={Styles.input}
                    onChangeText={setEvent}
                    value={event}
                    placeholder="An Event"
                />
            </View>
            <View style={Styles.submit}>
                <Link style={Styles.next} href={{
                    pathname: "/hallpass",
                    params: {name, noun, event}
                }}>Make my hall pass </Link>
            </View>
            <Pressable style={Styles.reset} onPress={()=> {
                    setName({name:""}),
                    setNoun({noun:""}),
                    setEvent({event:""})
                    }
                }>
                <View>  
                    <Text style={Styles.clear}>Reset </Text>
                </View>
            </Pressable>
        </View>
    )
}
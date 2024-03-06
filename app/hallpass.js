import React from 'react-native';
import { Text, View } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { Signature } from 'react-native-signature-canvas';
import Styles from '../styles/pagetwo';
import moment from 'moment';

export default function Page() {
    const params = useLocalSearchParams();
    const date = moment().format("DD/MM/YYYY");
    const { name } = params;
    const { noun } = params;
    const { event } = params;
    return (
        <View style={Styles.screen}>
            <View style={Styles.title}>
                <Link style={Styles.back} href="/"> Back</Link>
            </View  >
            <View style={Styles.pass}>
                <View style={Styles.banner}>
                    <Text style={Styles.hallpass}>
                        H A L L P A S S
                    </Text>
                </View>
                <View style={Styles.content}>
                    <Text style={Styles.brand}>
                        MADLIBS
                    </Text>
                    <Text style={Styles.date}>
                        DATE: { date }
                    </Text>
                    <Text style={Styles.storyone}>
                        { name } is too cool
                    </Text>
                    <Text style={Styles.storytwo}>
                        for { noun } class.
                    </Text>
                    <Text style={Styles.storythree}>
                        instead, she/he
                    </Text>
                    <Text style={Styles.storyfour}>
                        will be attending
                    </Text>
                    <Text style={Styles.storyfive}>
                        the { event }.
                    </Text>
                    <View style={Styles.signature}>
                        <Text style={Styles.sign}>
                            SIGNED:
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
import React, { Component } from 'react';
import { TextInput, View ,Text} from 'react-native';
import styles from './Home.component.style';
import TextArea from '../TextArea/TextArea.component';
import PropTypes from 'prop-types';

class Home extends Component{
    render(){
        const {setTitle, title, text, setText} = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.titleHeading}> Note Title</Text>
                <TextInput style={styles.titleTextInput}
                    onChangeText={this.setTitle} value={this.state.title} />
                <Text style={styles.textAreaTitle}> Please type your note below </Text>
                <TextArea text={this.state.text} onTextChange={this.setText} style={styles.textArea}/>
                <View style={styles.bottomBar}>
                    <View style={styles.bottomBarWrapper}>
                        <Text style={styles.saveBtn}>Save</Text>
                        <Text style={styles.characterCount}>{this.state.text.length} characters</Text>            
                    </View>
                </View>
            </View>
        );
    }
}

Home.propTypes = {
    setTitle: PropTypes.func,
    setText: PropTypes.func,
    title: PropTypes.string,
    text: PropTypes.string
};

export default Home;
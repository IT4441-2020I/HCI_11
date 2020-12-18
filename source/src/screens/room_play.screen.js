//import from library 
import React, {Component} from 'react'
import FeedbackModal from '../components/feed_back.modal';
import FooterBarComponent from '../components/common/footer_bar.component';

import HeaderBarComponent from '../components/common/header_bar.component';
import FeedbackListComponent from '../components/room_list.component';

import api from '../sample_db/fake_api_responses.json'
import { BODY, TEXT_SIZES } from '../utils/constants';
import { BLACK } from '../utils/palette';
import RoomListComponent from '../components/room_list.component';
import PracticeComponent from '../components/practice.component';
import RoomWayComponent from '../components/room_way.component';


export default class RoomPlayScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            focus_tab_index:0
        }
    }

    render(){
        return (

            <div style={styles.container}>
                <FeedbackModal
                      is_open={false} />

                <HeaderBarComponent />

                <div style={styles.body}>

                    <div style={{flex:1}}/>

                    <div style={styles.content_body}>
                        <RoomWayComponent/>
                        
                        <PracticeComponent practice_mode={this.state.focus_tab_index}/>
                    </div>

                    <div style={{flex:1}}/>
                    
                </div>

                
                <FooterBarComponent/>

                {/* footer */}
                <FooterBarComponent/>
            </div>
            
        )
    }
}

const styles={
    container:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        flexDirection: 'column'
    },
    body:{
        width:'100vw',
        display:'flex',
        flexDirection: 'row',
        paddingBottom:100,
        paddingTop:20
    },
    content_body:{
        flex:BODY.FLEX,
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

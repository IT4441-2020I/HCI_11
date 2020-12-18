//import from library 
import React, {Component} from 'react'

import SettingAccountComponent from '../components/setting/setting_account.component'
import SettingProfileCompanyComponent from '../components/setting/setting_profile_company.component'
import { routePaths, SIDEBAR_RATIO,PADDING_BODY_DASHBOARD } from '../utils/constants'
import { GRAY_6 } from '../utils/palette'
import HeaderListComponent from '../components/common/header_list.component'
import ButtonComponent from '../components/common/button.component'
import { Link } from 'react-router-dom'
import api from '../sample_db/fake_api_responses.json'
import {BODY} from '../utils/constants'
import {connect }from 'react-redux'
import * as action from '../redux/action/user.action'
import HeaderBarComponent from '../components/common/header_bar.component'
const setting=api.get_setting_company
export default class SettingScreen extends Component {
 

    render(){
        return (

            <div style={styles.container}>
                
                <HeaderBarComponent />
                
                <div style={styles.body}>
                    <div style={{flex:1}}/>
                    <div style={styles.content_body}>
                
                        <HeaderListComponent title='Cài đặt'/>

                        <div style={{marginTop:30}}>
                            <SettingAccountComponent 
                                    updateInputs={this.updateInputs}
                                account={setting.account}/>
                        </div>
                        
                        <div style={{marginTop:60}}>
                            <SettingProfileCompanyComponent 
                                profile={setting.profile}/>
                        </div>


                        <Link 
                                to={routePaths.DASHBOARD_TASK_LIST}
                            style={{marginTop:50,width:'25%',textDecoration:'none'}}>
                            <ButtonComponent 
                                onClick={this.updateSetting}
                                label='Lưu thay đổi' height={60}/>
                        </Link>
                        
                    </div>
                    <div style={{flex:1}}/>

     
                </div>
            
                
                

               
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
        paddingTop:BODY.PADDING_TOP
    },
    content_body:{
        display:'flex',
        flex:BODY.flex,
        flexDirection: 'column'
    }
   
}


// const mapStateToProps = state => ({
// 	user_infor: state.user_infor,
// });

// export default connect(mapStateToProps,action)(DashboardSettingCompanyScreen)
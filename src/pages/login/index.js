import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {actionCreators} from './store';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style';

class Login extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={input => this.account = input}/>
                        <Input placeholder='密码' type='password' ref={input => this.password = input}/>
                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            );
        } else {
            return <Redirect to='/'/>
        }

    };
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
});

const mapDispatchToProps = (dispatch) => ({
    login(accontEle, passwordEle) {
        dispatch(actionCreators.login(accontEle.value, passwordEle.value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

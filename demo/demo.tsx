import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import BreakingNewsAlert from '../src/BreakingNewsAlert';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    .content-area {
        &.persoonlijk {
            background-color: white;
        }

        aside {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    }
`;

class App extends PureComponent<any, any> {
    state: any = {
        checked: false
    }

    onBreakingNewsAlertChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({checked: e.currentTarget.checked});
    }

    render() {
        return(
            <>
                <GlobalStyle/>
                <BreakingNewsAlert
                    cardStyle={this.props.cardStyle}
                    checked={this.state.checked}
                    onChange={this.onBreakingNewsAlertChange}
                />
            </>
        );
    }
}

ReactDOM.render(<>
    <div>
        <App cardStyle="default"/>
    </div>
</>,
document.querySelector('.overview aside'));

ReactDOM.render(<>
    <div>
        <App cardStyle="persoonlijk"/>
    </div>
</>,
document.querySelector('.persoonlijk aside'));


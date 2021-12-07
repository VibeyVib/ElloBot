import react from "react";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
const config ={
    width: "400px",
    height: "500px", 
    floating: true,
  };
const theme = {
    background: '#fff',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#86d0c6',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#86d0c6',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
function ElloBot(){
    return(
        <ThemeProvider theme={theme}>
        <ChatBot className="bot"
            steps={[
              {
                id:'intro', 
                message:'Hello There! I am ElloBot', 
                trigger:'intro-user',
              },
              {
                id:'intro-user', 
                user:true,
                end:true,
              },
                   {
                    id:'yes-response', 
                    message:'Great!', 
                    end:true,
                   },
                   {
                    id:'no-response', 
                    message:'Sorry to hear that.', 
                    end:true,
                   },
            ]}
            {...config}

        />
        </ThemeProvider>
    );
}

export default ElloBot;
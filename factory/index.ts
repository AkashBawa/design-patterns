class Factory {
    static getInstance(integration: string) {
        switch(integration) {
            case 'slack' : return new slack()
            case 'googleDrive' : return new Drive();
        }
    }
}

class slack {
    myFunction() {
        console.log("My function called in slack");
    }    
}

class Drive {
    myFunction() {
        console.log("My function called in drive");
    } 
}

function Main(){ 
    const slack = Factory.getInstance('slack');
    const drive = Factory.getInstance('googleDrive');

    slack.myFunction();
    drive.myFunction();
}

Main();
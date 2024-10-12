function Hello(){
    let myName = 'Rutwik';
    let number = 456;
    let fullName = () => {
        return `${myName} Shende`;
    }

    return <h3>MessageNo: {number} I am your master {fullName()}</h3>
}

export default Hello;
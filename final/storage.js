const saveLS = budgetData => {
    const serializedArr = JSON.stringify(budgetData);
    localStorage.setItem("bD", serializedArr);
}

const getLS = () => {
    const retrieveArry = localStorage.getItem("bD");
    if (retrieveArry !== null) {
        return JSON.parse(retrieveArry);
    } else {
        return [];
    }
}


export {saveLS, getLS}
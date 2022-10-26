const numberValidator = (event:any) => {
    if (!/[0-9]/.test(event.key)) {
        event.preventDefault();
    }
};

export default numberValidator;

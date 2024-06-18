function MinutesToHours() {
    const [amount, setAmount] = React.useState(0);
    const [inverted, setInverted] = React.useState(false);
    const onChange = (event) => {
        setAmount(event.target.value);
    }
    const onReset = () => {
        setAmount(0);
    }
    const onInvert = () => {
        onReset();
        setInverted((current) => !current);
    }
    return (
        <>
            <div>
                <label htmlFor='minutes'>Minutes</label>
                <input
                    id='minutes'
                    type='number'
                    value={!inverted ? amount : Math.round(amount * 60)}
                    onChange={onChange}
                    disabled={inverted}
                />
            </div>
            <div>
                <label htmlFor='hours'>Hours</label>
                <input
                    id='hours'
                    type='number'
                    value={inverted ? amount : Math.round(amount / 60)}
                    onChange={onChange}
                    disabled={!inverted}
                />
            </div>
            <button
                onClick={onReset}
            >
            Reset
            </button>
            <button
                onClick={onInvert}>
                {inverted ? 'Turn back' : 'Invert'}
            </button>
        </>
    );
}
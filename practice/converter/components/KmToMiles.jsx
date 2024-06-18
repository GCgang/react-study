function KmToMiles() {
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
                <label htmlFor='kilometers'>Kilometers</label>
                <input
                    id='kilometers'
                    type='number'
                    value={!inverted ? amount : (amount * 1.60934).toFixed(2)}
                    onChange={onChange}
                    disabled={inverted}
                />
            </div>
            <div>
                <label htmlFor='miles'>Miles</label>
                <input
                    id='miles'
                    type='number'
                    value={inverted ? amount : (amount / 1.60934).toFixed(2)}
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
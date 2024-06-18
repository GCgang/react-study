function PyeongToSquareMeters() {
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
                <label htmlFor='pyeong'>Pyeong</label>
                <input
                    id='pyeong'
                    type='number'
                    value={!inverted ? amount : (amount / 3.3058).toFixed(2)}
                    onChange={onChange}
                    disabled={inverted}
                />
            </div>
            <div>
                <label htmlFor='squareMeters'>SquareMeters</label>
                <input
                    id='squareMeters'
                    type='number'
                    value={inverted ? amount : (amount * 3.3058).toFixed(2)}
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
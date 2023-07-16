function random_color() {
    const min = 0;
    const max = 255;
    const rgb_tab = [];

    for (let i = 0; i < 3; i++) {
        rgb_tab[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }

    const color_hex = rgb_tab.map((value) => value.toString(16).padStart(2, '0')).join('');
    return [color_hex, rgb_tab[0], rgb_tab[1], rgb_tab[2]];
}

export default function Card() {
    const [hex, red, green, blue] = random_color();
    const style = {
        backgroundColor: `#${hex}`,
    };

    return (
        <div className="card">
            <div style={style} className={"color"}>

            </div>
            
            <div>
                <p>R <input typr={"range"} min={"0"} max={"255"} value={red} step={"1"}> </input></p>
                <p>G <input typr={"range"} min={"0"} max={"255"} value={green} step={"1"}></input></p>
                <p>B <input typr={"range"} min={"0"} max={"255"} value={blue} step={"1"}></input></p>
                <p>HEX {hex.toUpperCase()}</p>
            </div>
            <div>
                przyciski do kontroli 
            </div>
        </div>
    );
}

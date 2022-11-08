import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Radio Joven PA",
            artist: "RadioJovenPA",
            cover: "https://img.freepik.com/psd-gratis/maqueta-microfono-escritorio-rectangular-vista-frontal_1332-10597.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://22063.live.streamtheworld.com/JP_SP_FMAAC_SC",
            active: true,
        },
        {
            name:"Radio Nativa",
            artist: "RadioNativa",
            cover: "https://img.freepik.com/vector-gratis/concepto-marco-neon-aire_52683-52393.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://24073.live.streamtheworld.com/NATIVA_SP_SC",
            active: false,
        },
        {
            name:"Radio Fm O Dia",
            artist: "RadioFmODia",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41309.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://streaming.livespanel.com:20000/live",
            active: false,
        },
        {
            name:"Radio Gazeta",
            artist: "RadioGazeta",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41314.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://shout25.crossradio.com.br:18002/stream/1/",
            active: false,
        },
        {
            name:"Demais",
            artist: "Demais",
            cover: "https://img.freepik.com/vector-gratis/silueta-aparato-radio_23-2147501018.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://live.paineldj.com.br/proxy/demaisfmtaio?mp=/stream",
            active: false,
        },
        {
            name:"Rádio Sucesso de Primavera do Leste",
            artist: "RádioSucessodePrimaveradoLeste",
            cover: "https://img.freepik.com/vector-gratis/radio-plana-retro-ilustrada_23-2148812864.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://servidor31-5.brlogic.com:8970/live",
            active: false,
        },
        {
            name:"Radio so mpb",
            artist: "Radiosompb",
            cover: "https://img.freepik.com/vector-gratis/aire-letrero-neon-marco_23-2148818543.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://play.braudio.com.br/ssl.php?p=7008&s=srv1",
            active: false,
        },
        {
            name:"Radio Saudade fm",
            artist: "RadioSaudadefm",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://18693.live.streamtheworld.com/SAUDADE_FM_SC",
            active: false,
        },
        {
            name:"Radio Lib Music Fm",
            artist: "RadioLibMusicFm",
            cover: "https://img.freepik.com/vector-gratis/dia-mundial-radio-diseno-plano_23-2148802732.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://s09.maxcast.com.br:8122/live",
            active: false,
        },
    ];
}

export default chillHop;



function mostrarDica(tipo){

    const dicas = {
        bovino: "🌳 Integre árvores às pastagens para melhorar o conforto térmico e aumentar a biodiversidade.",
        
        ave: "♻️ Aproveite resíduos orgânicos da propriedade para complementar a alimentação das aves de forma responsável.",
        
        suino: "⚡ Biodigestores podem transformar dejetos em biogás e fertilizantes naturais.",
        
        peixe: "💧 Monitore frequentemente o pH e a oxigenação da água para garantir o bem-estar dos peixes."
    };

    document.getElementById(tipo).innerHTML = dicas[tipo];
}
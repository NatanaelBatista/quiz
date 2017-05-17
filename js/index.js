////////////////////////////////////////////////////////////////////
/// jogo de quiz            ////////////////////////////////////////         
/// by: Natanael S. Batista ////////////////////////////////////////

var perguntas = [['Em ano começou a Revolução Francesa?','1769','1789','1790','1780',1],
        ['Contrário ao progresso.','Repulsivo','Anticiclismo','Retrógrado','Retógrafo',2],
        ['Ato ou efeito de revidar.','Recalcar','Revidalizar','Revitalizar','Revide',3],
        ['Antônimo de feio.','Agradável','Bonito','Horroroso','Amável',1],
        ['Instrumento utilizado para medir com precisão.','Torquimetro','Microscópio','Micrômetro','Metrônomo',2],
        ['Substituir alternadamente.','Alterar','Revezar','Mudar','transferir',1],
        ['Tipo de tubérculo.','Batata','Alface','Mamão','manga',0], 
        ['Guerra entre a Argentina e o Reino Unido entre abril e junho de 1982.','Guerra do Paraguai','Guerra dos Cem Anos','Guerra das Malvinas','Guerra do prata',2],
        ['Apreender significa.','Ficar mais culto','Estudar','ler','Confiscar',3],
        ['Menor estado brasileiro em área territorial.','Sergipe','Alagoas','Perbambuco','Acre',0],
        ['Pessoa que executa a impressão de textos:', 'Impressor', 'Ditilógrafo', 'Ditador', 'tipógrafo', 3],  
        ['Fábrica de tecidos de algodão:', 'Algodoal', 'Algodoaria', 'Tecelagem', 'Cotonifício', 3],
        ['Peça de madeira em que se assentam e fixam os trilhos das ferrovias.', 'Dormente', 'Vigote', 'Viga', 'Vigonho', 0], 
        ['Penteando o cabelo, o pente se carrega negativamente, pois:','Perde cargas elétricas positivas','Ganha cargas elétricas positivas','Perde cargas elétricas positivas','Ganha cargas elétricas negativas',3],
        ['Conduzem bem a eletricidade.','borracha','porcelana','metais','madeira',2],
        ['Num corpo neutro, o número de elétrons é?','Maior que a de prótons','Maior que a de nêutrons','Menor que a de prótons','Igual a de prótons',3],
        ['O Canadá pertence á:','América do Sul','América do Norte','América Central','Europa',1],
        ['Região brasileira que faz fronteira com o Uruguai.','Centro-Oeste','Norte','Sul','Sudeste',2],
        ['Aeronave que voa sem propulsão de motor.','Planador','Jato','Jumbo','Helicóptero',0],
        ['Instrução religiosa dada pelos padres aos indígenas.','Catequese','Sacramento','Ofertório','Eucaristia',0],
        ['Tonel de madeira usado para transportar líquidos.','Saca','Barril','Alabique','Atol',1],
        ['O parque Nacional das Emas fica em:','Mato Grosso do Sul','Minas Gerais','Goiáis','São Paulo',2],
        ['A revolução Russa ocorreu em?','1900','1975','1917','1919',2],
        ['O DNA é responssával pela:','Alimaentação','Reprodução','Hereditariedade','Proteção',2],
        ['Nome do submúltiplo da carga elétrica mc.','Micro','Mile','Macro','Macrímetro',1],
        ['Nome da unidade de medida pm.','Picômetro','Pímetro','Picímetro','Pilímetro',0],
        ['A organela celular mitocôndria é responsável pela:','Respiração','Digestão','Proteção','Movimentação',0],
        ['Ácido desoxirribonucleico.','ADC','RNA','DMA','DNA',3],
        ['A mais radical das vanguardas europeias.','Cubismo','Futurismo','Surrealismo','Dadaísmo',3],
        ['Coletivo de chave.','Chaves','Chaverada','Chaveiro','Molho',3],
        ['Número pertencente à seqüência 2, 4, 8, 16, 18, 32, 64...','254','2046','132','4096',3],
        ['Côr predominante da Bandeira da Áustria.','Azul','Verde','Vermelho','Laranja',2],
        ['O mesmo que setentrional.','Norte','Sul','Leste','Oeste',0],
        ['O mesmo que nenhures.','Ao lado','Em outra parte','Partir para o exterior','Trabalho assalariado',1],
        ['Ano da Proclamação da República no Brasil.','1789','1822','1889','1864',2],
        ['O primeiro leite materno.','Elostro','Malostro','Calostro','Colostro',3],
        ['Depósito de mel das abelhas.','Favoróide','Cumbuca','Favo','Favolíneo',2],
        ['Desvio da coluna vertebral para a esquerda ou direita.','Lordose','Escabiose','Metacarpo Escabial','Escoliose',3],
        ['É o canal que traz o alimento ao interior do corpo.','Tubo digestivo','Canal deferente','Canal interno','Tubo procarionte',0],
        ['Matriz extracelular solidificada.','Tecido Conjuntivo','Músculo','Osso','Osteoporose',2],
        ['Hiperemia é:','Dor ao toque','Alta temperatura','Angina vascular','Vermelhidão',3],
        ['Hiperestesia é:','Vermelhidão','Dor ao toque','Alta temperatura','Angina cardíaca',1],
        ['Infecções que se instalam nos pulmões.','Disfunção respiratória','Gripe','Pneumonia','Alveolar',2],
        ['Podem infectar outros organismos biológicos.','Bactérias','Fungos','Micróbios transmoleculares','Vírus',3],
        ['É o maior órgão do corpo humano.','Coração','Pele','Fígado','Baço',1],
        ['Inflamação do epitélio estomacal.','Esofatite','Úlcera pélvica','Cirrose','Gastrite',3],
        ['Toda e qualquer inflamação do fígado.','Esofatite.','Hepatite.','Gastrite.','Hemonofagite',1],
        ['Doença causada pela deficiência de vitamina D.','Escorbuto','Tifo','Anemia do tipo 5','Raquitismo',3],
        ['Alfred Nobel foi?','Industrial do ramo bélico','Famoso cientista sueco','Descobridor da fusão eletroestática','Politico americano',0],
        ['Número que precede uma expressão.','Numerador','Coeficiente','Multiplicador','Radiano',1],
        ['Número de constituições que o Brasil já teve, incluindo a atual.','5','6','7','8',2],
        ['Aquele que executa, ou dirige a execução, da impressão de textos.','Tipografico','Impressor','Cartógrafo','Tipógrafo',3],
        ['Vegetação rasteira encontrada próximo às regiões polares.','Tundra','Coniferas','Campos','Gramíneas',0],
        ['Número de estados da Região Sudeste do Brasil.','5','3','4','6',2],
        ['Pronome da terceira pessoa do singular.','Eu','Tu','Ele','Vós',2 ],
        ['Liberdade do estado de escravidão:','Oforria','Halforria','Alforria','Auforria',2],
        ['É extraido da seringueira:','Laca Vegetal','Leite Vegetal','Malte','Látex',3],
        ['Outra definição para os Uruguaios.','Guaianos','Platinos','Uruguaioenses','Cisplatinos',3],
        ['O Teatro Amazonas localizado na cidade de Manaus foi inaugurado em:','1696','1896','1796','1976',1],
        ['Laje saliente na fachada dos edificios:','Toldo','Marquize','Parapeito','Proteção Angular',1],
        ['O equivalente a 1 hectare:','10.000 metros quadrados','100.000 metros quadrados','1.000 metros quadrados','100 metros quadrados',0],
        ['Nome comum de todos os insetos da ordem dos Sifonápteros.','Percevejos','Pulga','Mosca','Barata',1],
        ['Um sinônimo de condensação é:','Solidificação','Liquefação','Destilação','Fusão',1],
        ['A mistura de água e acetona pode ser desbobrada:','Pela decantação','Pela filtração','Pela destilação','Pela centrifugação',2],
        ['Quanto à matéria, podemos afirmar:','É indivisível','É divisível até o limite do átomo','É divisível até o limite da molécula','Sempre possuí massa',3],
        ['O número 101 em romanos.','CI','MI','DI','EI',0],
        ['Metal mais precioso que tem cor amarela.', 'Bonze', 'Ouro', 'Cobre', 'Prata', 1]];

window.onload = function init() {

    var seta = document.querySelector('#seta'),
        pergunta = document.querySelector('#pergunta'),
        opcao = document.getElementsByTagName('li'),
        numeroRand,
        acertos = 0,
        erros = 0,
        perguntasTotal = 0,
        cor = true,
        passar = true;

    if (passar) {

        ////////////////////////////////////////////////////////////////////
        /// ação após o click para iniciar /////////////////////////////////

        seta.onclick = function iniciarContador() {    
        
            cor = true;

            for (var i=0; i<opcao.length; i++) {

                opcao[i].style.removeProperty('background');
            };

            if (passar) {

                numeroRand = Math.floor(Math.random() * 66);
                pergunta.innerHTML = perguntas[numeroRand][0];
                opcao[0].innerHTML = perguntas[numeroRand][1];
                opcao[1].innerHTML = perguntas[numeroRand][2];
                opcao[2].innerHTML = perguntas[numeroRand][3];
                opcao[3].innerHTML = perguntas[numeroRand][4];

                passar = false;
            }

            ////////////////////////////////////////////////////////////////////
            /// ação de acordo com a resposta do usuário ///////////////////////
            /// e armazenamento de dados                 ///////////////////////

            function armazenarDados(j) {

                return function() {

                    if (cor) {

                        perguntasTotal += 1;

                        if (j === perguntas[numeroRand][5]) {

                            opcao[j].style.background = '#33aa00';
                            acertos += 1;
                            cor = false;
                            passar = true;

                        } else {

                            opcao[j].style.background = '#ee3300';
                            opcao[perguntas[numeroRand][5]].style.background = '#33ee00';
                            erros += 1;
                            cor = false;
                            passar = true; 
                        }
                    }
                }
            }

            for (var i=0; i<opcao.length; i++) {

                opcao[i].onclick = armazenarDados(i);
            };

            ////////////////////////////////////////////////////////////////////
            /// condicional por selecionar o tipo de jogo //////////////////////

            if (document.title == 'Quiz - 1 jogador') {
                if (!contando) {
                    contando = true;
                    contar();
                    play1();
                }
            } else {
                if (!contando) {
                    contando = true;
                    contar();
                }
            }
        }
    }
    
    var tempo = 60,
    cronometro,
    contando = false,
    jogador = 0,
    acertosj1,
    errosj1,
    perguntasTotalj1,
    acertosj2,
    errosj2,
    perguntasTotalj2,
    conteudo = document.querySelector('#conteudo'),
    numero = document.querySelector('#numero');

    ////////////////////////////////////////////////////////////////////
    /// cronômetro /////////////////////////////////////////////////////

    function contar() {

        tempo--;
        numero.value = tempo;
        cronometro = setTimeout(contar, 1000);

        if (tempo == 0) {

            clearTimeout(cronometro);
            contando = false;

            if (document.title == 'Quiz - 1 jogador') {

                ////////////////////////////////////////////////////////////////////
                /// tela final exibida ao fim do jogo para modo 1jogador ///////////

                alert('SEU TEMPO ACABOU');

                if (acertos > 0) {

                conteudo.innerHTML = '<br /><span style="font-size: 40pt;">FIM DE JOGO</span><br /><br /><span style="font-size: 24pt;">Você respondeu <br />' + perguntasTotal + ' perguntas,\
                <br /><span style="color:green"> acertou ' + acertos + '</span> e <span style="color:red">errou ' + erros + '</span></span>';

                } else {
                    conteudo.innerHTML = '<br /><span style="font-size: 40pt;">FIM DE JOGO</span><br /><br /><span style="font-size: 24pt;">Você precisa melhorar</span>';
                }

            } else {

                ////////////////////////////////////////////////////////////////////
                /// ação para o modo 2jogadores ////////////////////////////////////
                
                jogador+=1;

                if (jogador < 2) {

                    perguntasTotalj1 = perguntasTotal;
                    acertosj1 = acertos;
                    errosj1 = erros;
                    alert('SEU TEMPO ACABOU!');
                    tempo = 60;
                    alert('JOGADOR 2');

                    for (var k=0; k<opcao.length; k++) {

                        opcao[k].style.removeProperty('background');
                    };

                    pergunta.innerHTML = 'Click na seta abaixo para iniciar';
                    opcao[0].innerHTML = '';
                    opcao[1].innerHTML = '';
                    opcao[2].innerHTML = '';
                    opcao[3].innerHTML = '';

                    if (!passar) {

                        passar = true;
                        cor = false;
                    }

                } else {

                    perguntasTotalj2 = perguntasTotal - perguntasTotalj1;
                    acertosj2 = acertos - acertosj1;
                    errosj2 = erros - errosj1;

                    ////////////////////////////////////////////////////////////////////
                    /// tela final exibida ao fim do jogo para modo 2jogadores /////////

                    if (acertosj1 > acertosj2) {

                        alert('SEU TEMPO ACABOU!');
                        conteudo.innerHTML = '<br><span style="font-size: 40pt;">JOGADOR 1 WIN</span><br />JOGADOR 1<br />Respondeu ' + perguntasTotalj1 + ',\
                        <span style="color:green"> acertou ' + acertosj1 + '</span><br />e <span style="color:red">errou ' + errosj1 + '</span> perguntas<br /><br />\
                        JOGADOR 2<br />Respondeu ' + perguntasTotalj2 + ', <span style="color:green">acertou ' + acertosj2 + '</span><br />e <span style="color:red">errou ' + errosj2 + '</span> perguntas';
                    
                    } else if (acertosj1 < acertosj2) {
                        alert('SEU TEMPO ACABOU!');
                        conteudo.innerHTML = '<br><span style="font-size: 40pt;">JOGADOR 2 WIN</span><br />JOGADOR 1<br />Respondeu ' + perguntasTotalj1 + ',\
                        <span style="color:green"> acertou ' + acertosj1 + '</span><br />e <span style="color:red">errou ' + errosj1 + '</span> perguntas<br /><br />\
                        JOGADOR 2<br />Respondeu ' + perguntasTotalj2 + ', <span style="color:green">acertou ' + acertosj2 + '</span><br />e <span style="color:red">errou ' + errosj2 + '</span> perguntas';
                    
                    } else {
                        alert('SEU TEMPO ACABOU!');
                        conteudo.innerHTML = '<br /><span style="font-size: 40pt;">EMPATE</span><br /><br />JOGADOR 1<br />Respondeu' + perguntasTotalj1 + ',\
                        <span style="color:green"> acertou ' + acertosj1 + '</span><br />e <span style="color:red">errou ' + errosj1 + '</span> perguntas<br /><br />\
                        JOGADOR 2<br />Respondeu ' + perguntasTotalj2 + ', <span style="color:green">acertou ' + acertosj2 + '</span><br />e <span style="color:red">errou ' + errosj2 + '</span> perguntas';
                    }
                }
            }
        }
    }
}

/// ...end /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
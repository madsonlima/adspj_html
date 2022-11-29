// Validação simples
// Downloads\jquery-validation-1.19.3.zip\dist\localization (demos)
$(document).ready(function(){ // o documento que está sendo lido, eu quero que gere uma função
    $("#frmCadastro").validate({ // nome do formulário
        rules:{ // regras de cada input do formulário
            nome:{
                required: true, // campo obrigatório
                minlength: 3, // mínimo de letras
            }, // sempre quebrar com vírgulas!
            email:{
                email: true,
                required: true
            },
            senha:{
                minlength: 3,
                maxlength: 10 // máximo de caracteres
            },
            confsenha:{
                equalTo: '#senha'
            },
            cpf:{
                cpfBR: true,
                required: true
            },
            numero:{
                number: true
            }
        },
        messages:{ // mensagens (ERRO)
            nome:{
                accept: "Informe um nome válido."
            }
        }
    })
})
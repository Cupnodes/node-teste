import { createPromptModule } from 'inquirer'
import chalk from 'chalk'
import fs from 'fs'

function operator(){
    createPromptModule([{
        type: 'list',
        message: 'O que você deseja fazer?',
        choices: [
            'Criar conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair'
        ]
    }])
}

operator()
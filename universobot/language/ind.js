exports.wait = () => {
	return`*「 🇧🇷🇯🇵 ESPERE 🇧🇷🇯🇵 」 ⌛ ESTA EM PROCESSO ⌛*`
}

exports.succes = () => {
	return`*「 🇧🇷🇯🇵 SUCESSO 🇧🇷🇯🇵 」*`
}

exports.lvlon = () => {
	return`*「 🇧🇷🇯🇵 Ativado 🇧🇷🇯🇵 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 🇧🇷🇯🇵 Desativado 🇧🇷🇯🇵 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*🐤 SEU NÍVEL AINDA ESTÁ VAZIO 🐤*`
}

exports.lvlnoon = () => {
	return`*🦇 Leveling desativado 🦇*`
}

exports.noregis = () => {
	return`*「 🇯🇵🇧🇷 NÃO REGISTRADO 🇯🇵🇧🇷 」*\n\n*COMO REGISTRAR: ${prefix}registrar Nome-Idade* \n\n*Vou Te Dar um Exemplo*\n ${prefix}registrar Nan-17`
}

exports.rediregis = () => {
	return`*「 🇯🇵🇧🇷 JA REGISTRADO 🇯🇵🇧🇷 」*\n\n*você já está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*🦦 Falhou que pena 🦦*`
}

exports.linkga = () => {
	return`*🐕‍🦺 Link inválido 🐕‍🦺*`
}

exports.groupo = () => {
	return`*「SÓ PODE NOS GRUPO」*`
}

exports.ownerb = () => {
	return`*「SÓ O DONO DO BOT QUE PODE USAR ;/」*`
}

exports.ownerg = () => {
	return`*「SÓ O DONO DO BOT QUE PODE USAR ;/」*`
}

exports.admin = () => {
	return`*「SÓ OS ADMINISTRADORES DO GRUPO」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*❌ *Tem que ativar o NSFW* ❌*`
}

exports.bug = () => {
	return`*🆙 Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos 🆙*`
}

exports.wrongf = () => {
	return`*🗿 Formato incorreto / texto em branco 🗿*`
}

exports.clears = () => {
	return`*⚓ Limpando ⚓*`
}

exports.pc = () => {
	return`*「 🇧🇷🇯🇵 CADASTRO 🇧🇷🇯🇵 」*\n\n para saber se você se cadastrou, verifique a mensagem que enviei \n\n*NOTA:* *⚠️ se você não entendeu a mensagem significa que você não salvou o número do bot ⚠️*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 🇧🇷🇯🇵 SEUS DADOS 🇧🇷🇯🇵 」*\n\n*🌍 Você se registrou 🌎* \n\n┏━⊱🇧🇷🇯🇵 *Nome*\n┗⊱🇧🇷🇯🇵 ${namaUser}\n┏━⊱🇧🇷🇯🇵 *Numero*\n┗⊱🇧🇷🇯🇵 wa.me/${sender.split("@")[0]}\n┏━⊱🇧🇷🇯🇵 *Idade*\n┗⊱${umurUser}\n┏━⊱🇧🇷🇯🇵 *Hora de registro*\n┗⊱🇧🇷🇯🇵 ${time}\n\n┏━❉🇧🇷🇯🇵 *Codigo importante* ❉━\n┣⊱${serialUser}\n┗⊱🇧🇷🇯🇵 *NOTE* : *⚠️ Salva esse codigo ai que talvez você precise dele ⚠️*`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado\tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} não o script do dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${aha}*\n\n_NOTE : Converse no grupo para sempre ganhar XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahb}*\n\n_NOTE : Converse no grupo para sempre ganhar XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahc}*\n\n_NOTE : Converse no grupo para sempre ganhar XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahd}*\n\n_NOTE : Converse no grupo para sempre ganhar XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahe}*\n\n_NOTE : Converse no grupo para sempre ganhar XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpa ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahf}*\n\n_NOTE : Converse no grupo para sempre ganhar XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
┏━━━⊱  *🇧🇷🇯🇵 Informação do Usuario 🇧🇷🇯🇵*  ⊰━━┓
┣⊱🇯🇵🇧🇷 *Nome* : ${pushname}
┣⊱🇯🇵🇧🇷 *Numero* : wa.me/${sender.split("@")[0]}
┣⊱🇯🇵🇧🇷 *O teu dinheiro* : ${uangku}
┣⊱🇯🇵🇧🇷 *XP* : ${getLevelingXp(sender)}/${reqXp}
┣⊱🇯🇵🇧🇷 *Level* : ${getLevelingLevel(sender)}
┣⊱🇯🇵🇧🇷 *Registro do usuário* : ${_registered.length}
┗━━━⊱  ⸨ *Universo Otaku* ⸩  ⊰━━━━┛


┏━━❉ *About Bot* ❉━━━┓
   *BOT DE ANIMES* 

┣━━❉ *Maker* ❉━━━━━━
┣⊱ 🇧🇷🇯🇵 *${prefix}🐯 🦁* 
┣⊱ 🇧🇷🇯🇵 *Descrição: Criar figurinhas,Gif*
 
┣⊱ 🇧🇷🇯🇵 *${prefix}imgmaker* 
┣⊱ 🇧🇷🇯🇵 *Descrição: Criar img*

┣⊱ 🇧🇷🇯🇵 *${prefix}text3d* 

┣⊱ 🇧🇷🇯🇵 *${prefix}ocr* 
┣⊱ 🇧🇷🇯🇵 *Descrição: pegar letras de midia*

┣⊱ 🇧🇷🇯🇵 *${prefix}toimg* 
┣⊱ 🇧🇷🇯🇵 *Descrição:transformar figurinha em imagem*

┣⊱ 🇧🇷🇯🇵 *${prefix}qrcode*
┣⊱ 🇧🇷🇯🇵 *Descrição:Digita a URL que deseja transformar em qr*

┣━━❉ *Media* ❉━━━━━━
┣⊱ 🇧🇷🇯🇵 *${prefix}yta* 
┣⊱ 🇧🇷🇯🇵 *Descrição: Baixar as musicas do youtube*

┣⊱ 🇧🇷🇯🇵 *${prefix}ytv* 
┣⊱ 🇧🇷🇯🇵 *Descrição:Baixar videos do youtube*

┣⊱ 🇧🇷🇯🇵 *${prefix}tiktokstalk* 
┣⊱ 🇧🇷🇯🇵 *Descrição: Pega algum perfil do tiktokstalk*

┣⊱ 🇧🇷🇯🇵 *${prefix}igstalk*
┣⊱ 🇧🇷🇯🇵 *Descrição: Pega algum perfil do instagram*

┣⊱ 🇧🇷🇯🇵 *${prefix}fototiktok*

┣━━❉ *Jogos* ❉━━
┣⊱ 🇧🇷🇯🇵 *${prefix}posso* 
┣⊱ 🇧🇷🇯🇵 *${prefix}sorte* 

┣━━❉ *Fun Menu* ❉━━━━
┣⊱ 🇧🇷🇯🇵 *${prefix}imgale* 

┣━━❉ *Nsfw* ❉━━━━━━━
┣⊱ 🇧🇷🇯🇵 *${prefix}waifu* 
┣⊱ 🇧🇷🇯🇵 *${prefix}anime* 
┣⊱ 🇧🇷🇯🇵 *${prefix}neko*  
┣⊱ 🇧🇷🇯🇵 *${prefix}cat* 
┣⊱ 🇧🇷🇯🇵 *${prefix}pokemon* 
┣⊱ 🇧🇷🇯🇵 *${prefix}dog* 
┣⊱ 🇧🇷🇯🇵 *${prefix}pinterest*

┣━━❉ *Other* ❉━━━━━━━
┣⊱ 🇧🇷🇯🇵 *${prefix}pagweb* 
┣⊱ 🇧🇷🇯🇵 *Descrição: Captura uma pagina da net*

┣⊱ 🇧🇷🇯🇵 *${prefix}map* 
┣⊱ 🇧🇷🇯🇵 *Descrição: Mostra o mapa de algum país*

┣━━❉ *Sound* ❉━━━━━━
┣⊱ 🇧🇷🇯🇵 *${prefix}voz* 

┣━━❉ *Group* ❉━━━━━━
┣⊱ 🇧🇷🇯🇵 *${prefix}blocklist* 
┣⊱ 🇧🇷🇯🇵 *${prefix}hidetag*
┣⊱ 🇧🇷🇯🇵 *${prefix}gplist*
┣⊱ 🇧🇷🇯🇵 *${prefix}linkgp* 
┣⊱ 🇧🇷🇯🇵 *${prefix}marcar* 
┣⊱ 🇧🇷🇯🇵 *${prefix}add* 
┣⊱ 🇧🇷🇯🇵 *${prefix}ban* 
┣⊱ 🇧🇷🇯🇵 *${prefix}gpnm* 
┣⊱ 🇧🇷🇯🇵 *${prefix}gpdesc* 
┣⊱ 🇧🇷🇯🇵 *${prefix}demitir* 
┣⊱ 🇧🇷🇯🇵 *${prefix}contratar* 
┣⊱ 🇧🇷🇯🇵 *${prefix}adms* 
┣⊱ 🇧🇷🇯🇵 *${prefix}gp* [abrir/fechar] 
┣⊱ 🇧🇷🇯🇵 *${prefix}simih* [1/0] 
┣⊱ 🇧🇷🇯🇵 *${prefix}nsfw* [1/0]  
┣⊱ 🇧🇷🇯🇵 *${prefix}bv* [1/0] 

┣━━❉ *O Sistema* ❉━━━
┣⊱ 🇧🇷🇯🇵 *${prefix}leveling [ativar/desativar]* 
┣⊱ 🇧🇷🇯🇵 *${prefix}level* 
┣⊱ 🇧🇷🇯🇵 *${prefix}melhoreslvl*
┣⊱ 🇧🇷🇯🇵 *${prefix}parceiro*
┣⊱ 🇧🇷🇯🇵 *${prefix}next*
┣⊱ 🇧🇷🇯🇵 *${prefix}transferir*
┣⊱ 🇧🇷🇯🇵 *${prefix}conta*
┣⊱ 🇧🇷🇯🇵 *${prefix}comprar*
┣⊱ 🇧🇷🇯🇵 *${prefix}tickets*
┣⊱ 🇧🇷🇯🇵 *${prefix}registrar*
┣⊱ 🇧🇷🇯🇵 *${prefix}upando*
┣⊱ 🇧🇷🇯🇵 *${prefix}evento*

┣━━❉ *Owner* ❉━━━━━━
┣⊱ 🇧🇷🇯🇵 *${prefix}bc*
┣⊱ 🇧🇷🇯🇵 *${prefix}setreply*
┣⊱ 🇧🇷🇯🇵 *${prefix}bcgp*
┣⊱ 🇧🇷🇯🇵 *${prefix}setprefix*
┣⊱ 🇧🇷🇯🇵 *${prefix}setpp*
┣⊱ 🇧🇷🇯🇵 *${prefix}kickall*
┣⊱ 🇧🇷🇯🇵 *${prefix}lptudo*
┣⊱ 🇧🇷🇯🇵 *${prefix}blockear*
┣⊱ 🇧🇷🇯🇵 *${prefix}desbloquear*
┣⊱ 🇧🇷🇯🇵 *${prefix}sair*
┣⊱ 🇧🇷🇯🇵 *${prefix}clone*
┣⊱ 🇧🇷🇯🇵 *${prefix}imgbot*

┣━━⊱ *CREDITOS A QUEM CRIARAM O BOT* ⊰━┫
┃
┣⊱ 🇧🇷🇯🇵 *AFFIS JUNIANTO*
┣⊱ 🇧🇷🇯🇵 *FADHIL GRAPHY*
┣⊱ 🇧🇷🇯🇵 *MHANKBARBARS*
┣⊱ 🇧🇷🇯🇵 *MYBOT TEAM*
┣⊱ 🇧🇷🇯🇵 *AGUNG(XPTN)*
┣⊱ 🇧🇷🇯🇵 *BRYAN(SUHU)*
┣⊱ 🇧🇷🇯🇵 *TOBZ*
┣⊱ 🇧🇷🇯🇵 *ARUGAZ*
┃
┣⊱ 
┃
┗━━⊱  ⸨ *Universo otaku* ⸩  ⊰━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 🆙 Parabens 🆙 」*

┏⊱🇯🇵🇧🇷 *Nome* : ${pushname}
┣⊱🇯🇵🇧🇷 *Numero* : wa.me/${sender.split("@")[0]}
┣⊱🇯🇵🇧🇷 *Xp* : ${getLevelingXp(sender)}
┣⊱🇯🇵🇧🇷 *Limite* = +1
┗⊱🇯🇵🇧🇷 *Level* : ${getLevel} ⊱✅  ${getLevelingLevel(sender)}

🌍 *Vocer quer ficar no topo 👑? Seja ativo no grupo* 🌏
`}
 
exports.limitend = (pushname) => {
	return`*${pushname} *⚓ tickets ⚓*\n*Os tickets são resetados a cada 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 🆙 Seus tickets 🆙 」*

*🇯🇵🇧🇷 Quantidade de tickets 🇯🇵🇧🇷* : ${limitCounts}

*⚠️ Consiga tickets comprando ou subindo de level ⚠️*`
}

exports.satukos = () => {
	return`*⚜️ Use o comando junto do 1 / ativar ou 0 / desativar ⚜️*`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 🇯🇵🇧🇷 Universo Otaku 🇯🇵🇧🇷 」⊰━┓*\n┣⊱🏆 *Nome* : ${pushname}\n┣⊱🏆 *Numero* : ${sender.split("@")[0]}\n┣⊱🏆 *Dinheiro* : ${uangkau}\n\n *👑 Seja ativo e fique acima de todos 👑*`
}
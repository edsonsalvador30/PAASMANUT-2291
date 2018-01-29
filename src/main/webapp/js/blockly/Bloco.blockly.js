window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Bloco = window.blockly.js.blockly.Bloco || {};

var item;

/**
 * Bloco
 */
window.blockly.js.blockly.Bloco.Executar = function() {
	this.cronapi.screen.notify('success', 'Modal para ser aberto');
	this.cronapi.screen.showModal("modal73847");
}

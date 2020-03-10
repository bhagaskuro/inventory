const LineConnect = require('./connect');
let line = require('./main.js');
let LINE = new line();

const auth = {
  authToken: 'LW1Z7N++N3p0pOQwSqccuCOumGjQW1e+ed7/pHWEasjf06CWotlrotdaziCYeTdC7b6AfrHa5u4Ao1huxLTTisuljWL5fLRM7Be3w9J2MaD3iw7h1lmDB8FinSyB75xaSm7bRJth+tUSmXy1ApQNhwdB04t89/1O/w1cDnyilFU=',
  certificate: 'fcc6e322f44e23bfbd8440990267e307'
}
//let client =  new LineConnect(auth);
   let client =  new LineConnect();

client.startx().then(async (res) => {
	
	while(true) {
		try {
			ops = await client.fetchOps(res.operation.revision);
		} catch(error) {
			console.log('error',error)
		}
		for (let op in ops) {
			if(ops[op].revision.toString() != -1){
				res.operation.revision = ops[op].revision;
				LINE.poll(ops[op])
			}
		}
	}
});

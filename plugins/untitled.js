case "كبلز":
				
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee..حالة حب هنا 🥀ًًٍ💗َِ🤍ًًٍٍَُِِᥫَ᭡َ᭡ @${akuu.jid.split('@')[0]} ♥️👀 @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
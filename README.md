# How i have reach top 1k Leaderboard on Nulink

![image](https://github.com/TheSalade/NulinkTop1k/assets/83350456/b6b1aa98-477c-47c0-b88e-bc38b0261d97)
![image](https://github.com/TheSalade/NulinkTop1k/assets/83350456/b3983f87-348e-4a88-9e85-5a541ef759f0)
![image](https://github.com/TheSalade/NulinkTop1k/assets/83350456/71b6d8ce-f64c-436f-a077-7c49a3257c83)

# How to use this Script

1-Download visual studio code https://code.visualstudio.com/

2- Download node JS https://nodejs.org/en

3- Place the 4 scripts in the same folder

4- Open visual studio code and open the folder with scripts

![image](https://github.com/TheSalade/NulinkTop1k/assets/83350456/1cda244a-f8de-4818-8a60-c0ed4b6025ac)

Open a terminal cmd and execute all this command :

`npm install ethers`

`npm install web3`

`npm install bip39`

`npm install ethereumjs-wallet@0.6.5`

5- Run the newSEED.js script to get a new wallet 

![image](https://github.com/TheSalade/NulinkTop1k/assets/83350456/fc271994-2243-424d-b90e-7e1dfa7b41fd)

6- Copy the wallet address

![image](https://github.com/TheSalade/NulinkTop1k/assets/83350456/18531420-8f8a-43b5-be47-377cca20c281)

7- Claim BNB testnet token on the address generated by the script

https://www.bnbchain.org/en/testnet-faucet

8- Open sendBNB.js scripts and modify the variable mnemonic by the private generated by the script 
![image](https://github.com/TheSalade/NulinkTop1k/assets/83350456/34ef0703-46c5-464d-9976-0143e6a1d314)

9- Open new terminal windows and launch sendBNB script : `node sendBNB.js`

![image](https://github.com/TheSalade/NulinkTop1k/assets/83350456/4a5174a5-59c0-46e3-9be0-5bbc045f63c1)

If everything works you should see this in the terminal

![image](https://github.com/TheSalade/NulinkTop1k/assets/83350456/aee1a83e-7a41-4d0c-adf5-7ee4350bf72a)

10- Open claimNLK.js script and same thing change the variable mnemonic by the one generated at step 6 (your SEED PHRASE not private key) 

![image](https://github.com/TheSalade/NulinkTop1k/assets/83350456/5eb5d0ec-e9f9-4314-b8bd-7410bea3aec1)


11- Open a new terminal windows and launch the script claimNLK.js : `node claimNLK.js`

![image](https://github.com/TheSalade/NulinkTop1k/assets/83350456/d5531c1d-31ea-46f1-8095-a95e159cdef7)

12- Open sendNLK script and modify the mnemoic again with one generated at step 6 (your SEED PHRASE)

13- Modify receiver variable and put the address where you want received NLK token (remove 0x from your address)

14- Launch sendNLK script : `node sendNLK.js`

![image](https://github.com/TheSalade/NulinkTop1k/assets/83350456/798491c0-88c7-46f0-bc4b-909a0b7c7afa)

⚠️ You must save each modification in a script by doing ctrl+S⚠️ 

⚠️ You can run each script without waiting for the first one to finish, just respect the order sendBNB -> claimNLK -> sendNLK⚠️






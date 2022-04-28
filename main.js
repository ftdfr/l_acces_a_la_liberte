var pts1 = document.getElementById('pts1');
var dr1 = document.getElementById('dr1');
var choix1 = document.getElementById('choix1');
var casej1 = 0;
var ptsj1 = 0;
var drj1 = 0;

// var pts2 = document.getElementById('pts2');
// var dr2 = document.getElementById('dr2');
// var choix2 = document.getElementById('choix2');
// var casej2 = 0;
// var ptsj2 = 0;
// var drj2 = 0;

// var pts3 = document.getElementById('pts3');
// var dr3 = document.getElementById('dr3');
// var choix3 = document.getElementById('choix3');
// var casej3 = 0;
// var ptsj3 = 0;
// var drj3 = 0;

// var pts4 = document.getElementById('pts4');
// var dr4 = document.getElementById('dr4');
// var choix4 = document.getElementById('choix4');
// var casej4 = 0;
// var ptsj4 = 0;
// var drj4 = 0;

var drpark = 0;
var compteurpark = document.getElementById('compteurpark');

function points1(){
    var x = document.getElementById('cases1').value;
    if(x == "case1-1"){
        choix1.innerHTML = "Vous accordez plus de libertés de circulation à votre peuple ainsi ils pourront se déplacer librement comme l’air<br><p style='text-align: center'>ou</p><br>Vous limitez les déplacements de vos chers citoyens, ils ne peuvent désormais que se déplacer sur les trottoirs lorsqu’ils sont à pied et vous mettez en place un couvre-feu entre 22h et 6h";
        casej1 = 11;
    }else if(x == "case1-2"){
        choix1.innerHTML = "Vos citoyens se plaignent qu’Internet ne respecte pas leurs vies privées donc tu décides d’agir en protégeant les données personnelles de tous les utilisateurs<br><p style='text-align: center'>ou</p><br>Tu fermes les yeux puisqu’Internet est une source de revenue très importante";
        casej1 = 12;
    }else if(x == "case1-3"){
        choix1.innerHTML = "Vous pensez que la liberté de pensée est primordiale pour un être humain<br><p style='text-align: center'>ou</p><br>Vous considérez qu’il ne peut pas y avoir d’opinions sinon la société sera dans le désordre";
        casej1 = 13;
    }else if(x == "case1-4"){
        choix1.innerHTML = "Vous considérez le droit à la vie comme l’un des plus important car elle permet à tous les citoyens de jouir de leurs droits<br><p style='text-align: center'>ou</p><br>Vous ne considérez pas votre peuple comme des êtres vivants mais plutôt comme du bétail donc vous ne leurs accorder pas ce droit et qu’aucune loi ne la protège";
        casej1 = 14;
    }else if(x == "case1-5"){
        random = Math.floor(Math.random() * 2);
        if(random == 0){
            choix1.innerHTML = "Une crise économico-financière a lieu";
            ptsj1 -= 3000;
            drj1 -= 350000;
            drpark += 350000;
        }else{
            choix1.innerHTML = "Vous bénéficiez de financements privés et publics d’Etats voisins";
            ptsj1 += 3000;
            drj1 += 350000;
            drpark -= 350000;
        }
        pts1.innerHTML = "Points : "+ ptsj1;
        dr1.innerHTML = "Dollars : "+ drj1;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x == "case1-6"){
        choix1.innerHTML = "L'objection de conscience consiste à refuser d'accomplir certains actes prescrits par la loi ou par les représentants de l'autorité en général, parce que contraires à des normes morales, éthiques ou religieuses fondées sur la liberté de conscience<br><p style='text-align: center'>ou</p><br>Vous ne considérez pas ce droit valable puisqu’il permet de refuser certain ordre et de passer à travers la loi";
        casej1 = 16;
    }else if(x == "case1-7"){
        choix1.innerHTML = "Pour vous ce droit est tout à fait normal puisque les citoyens ont travaillé dur pour obtenir ces biens<br><p style='text-align: center'>ou</p><br>Vous n’acceptez pas ce droit puisque pour vous il y a beaucoup d’inégalité dans votre territoire donc vous voulez que tous vos citoyens jouissent des mêmes biens";
        casej1 = 17;
    }else if(x == "case1-8"){
        choix1.innerHTML = "Vous considérez que les enfants de 16ans sont assez matures pour voter, que les personnes ne possédant pas la nationalité française peuvent aussi voter puisque chaque vote compte pour vous<br><p style='text-align: center'>ou</p><br>Vous allez changer les droits de vote pour que seulement ce qui ont une classe social supérieur à la moyenne peuvent voter";
        casej1 = 18;
    }else if(x == "case1-9"){
        choix1.innerHTML = "La liberté d'association consiste en la possibilité de former ou de rejoindre un groupe pour une durée prolongée. C'est le droit de constituer, d'adhérer et de refuser d'adhérer à une association<br>Vous l'accordez<br><p style='text-align: center'>ou</p><br>Vous ne la mettez pas en place";
        casej1 = 19;
    }else if(x == "case1-10"){
        choix1.innerHTML = "Vous recevez ou perdez tout l'argent du park gratuit";
        drj1 += drpark;
        dr1.innerHTML = "Dollars : "+ drj1;
        drpark = 0;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x == "case1-11"){
        choix1.innerHTML = "L’éducation compte énormément pour vous et vous voulez permettre à tous les enfants sans exception de s’enrichir culturellement sans payer de frais<br><p style='text-align: center'>ou</p><br>Pour vous seul ce qui payent les frais scolaires ont droit à l’éducation";
        casej1 = 111;
    }else if(x == "case1-12"){
        choix1.innerHTML = "Le droit à la sûreté protège les individus contre les arrestations et les emprisonnements arbitraires<br><p style='text-align: center'>ou</p><br>Vous considérez que ce qui enfreignent la loi doivent être sévèrement puni et ainsi perdre des libertés dans le futur";
        casej1 = 112;
    }else if(x == "case1-13"){
        choix1.innerHTML = "Vous considérez que le droit à l’image peut atteindre la vie privée et qu’il faut demander l’accord de la personne filmé pour pouvoir publier l’image ou vidéo sur Internet<br><p style='text-align: center'>ou</p><br>Ce droit pour vous est juste inutile puisque sur Internet il y a un très grand nombre d’image avec des têtes dessus donc ce sera juste une image comme les autres";
        casej1 = 113;
    }else if(x == "case1-14"){
        choix1.innerHTML = "Vous voulez mettre en place une loi pour que toutes les personnes mourantes choisissent comment leurs vies se terminent<br><p style='text-align: center'>ou</p><br>Vous vous en foutez des personnes mourantes puisque dans peu de temps ils ne seront plus là";
        casej1 = 114;
    }else if(x == "case1-15"){
        choix1.innerHTML = "Passez votre tour et le tour suivant, vous êtes en prison";
    }else if(x == "case1-16"){
        choix1.innerHTML = "Vous voulez conservez la dignité humaine et pour ce fait vous aménager une loi comme quoi le travail forcé, l’esclavage sont une pratique interdite<br><p style='text-align: center'>ou</p><br>Cela vous importe peu puisque tant que ça rapporte de l’argent au gouvernement toutes les manières sont valables";
        casej1 = 116;
    }else if(x == "case1-17"){
        choix1.innerHTML = "Beaucoup d’enfant non-désiré naissent puisque l’avortement est illégal et très dangereux pour ce fait vous décider d’agir en formant plus de chirurgien dans ce domaine, de faire des recherches et légaliser l’avortement<br><p style='text-align: center'>ou</p><br>Vous n’acceptez pas l’avortement puisque ça tue un enfant même si c’est un embryon cela vous brise le cœur";
        casej1 = 117;
    }else if(x == "case1-18"){
        choix1.innerHTML = "Pour vous le droit à la santé permet de garantir à toute personne un accès égalitaire aux soins nécessités par son état de santé, sans discrimination gratuitement<br><p style='text-align: center'>ou</p><br>Vous considérez que le matériel médical est très couteux donc pour couvrir les frais tous les patients doivent payer";
        casej1 = 118;
    }else if(x == "case1-19"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 119;
    }else if(x == "case1-20"){
        choix1.innerHTML = "Vous passez sur la case départ : bonus de 500 000 dollars";
        drj1 += 500000;
        dr1.innerHTML = "Dollars : "+ drj1;
    }else if(x == "case2-1"){
        choix1.innerHTML = "Les députés votent à l’unanimité la loi suivante : La SPA reçoit plus de fonds, la santé des animaux est importante<br>Vous acceptez<br><p style='text-align: center'>ou</p><br>Vous refusez";
        casej1 = 21;
    }else if(x == "case2-2"){
        choix1.innerHTML = "Le peuple exige d’être entendu et menace de manifester. Envoyer les forces de l’ordre et calmer le jeu de force<br><p style='text-align: center'>ou</p><br>Laisser les manifestants sous surveillance";
        casej1 = 22;
    }else if(x == "case2-3"){
        choix1.innerHTML = "Pour vous, toutes les religions/cultes doivent être acceptés et vous accordez la liberté à tous de croire en n’importe quelle religion<br><p style='text-align: center'>ou</p><br>Selon vous, cette liberté est négligeable, vous l’interdisez de votre pays";
        casej1 = 23;
    }else if(x == "case2-4"){
        choix1.innerHTML = "L’ambassade demande l’autorisation de déplacement pour entamer des négociations avec le géant du pétrole FUEL pour maximiser les productions du pays<br>Vous acceptez<br><p style='text-align: center'>ou</p><br>Vous refusez";
        casej1 = 24
    }else if(x == "case2-5"){
        random = Math.floor(Math.random() * 2);
        if(random == 0){
            choix1.innerHTML = "Guerre : le pays voisin a décidé de vous visiter en tank (comme Poutine le fait)";
            ptsj1 -= 3000;
            drj1 -= 400000;
            drpark += 400000;
        }else{
            choix1.innerHTML = "Vous êtes un bon président, les maires et votre parti vous financent";
            ptsj1 += 3000;
            drj1 += 350000;
            drpark -= 350000;
        }
        pts1.innerHTML = "Points : "+ ptsj1;
        dr1.innerHTML = "Dollars : "+ drj1;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x == "case2-6"){
        choix1.innerHTML = "Le parlement et le sénat sont contre le projet de loi sur le retour de la peine de mort. Vous êtes totalement d’accord et forcez le passage du projet de loi<br><p style='text-align: center'>ou</p><br>Vous trouvez le projet absurde et retirez le projet de loi";
        casej1 = 26;
    }else if(x == "case2-7"){
        choix1.innerHTML = "Votre palais présidentiel est entouré de casseurs furieux, vous estimez que la menace est négligeable<br><p style='text-align: center'>ou</p><br>Vous déployez les forces de l’ordres et assurez la paix dans les environs";
        casej1 = 27;
    }else if(x == "case2-8"){
        choix1.innerHTML = "Vous rejoignez l’OTAN car vos frontaliers vous menacent<br><p style='text-align: center'>ou</p><br>Vous ne le faite pas car la guerre c'est bien et vous voulez gagner du territioire (Poutine)";
        casej1 = 28;
    }else if(x == "case2-9"){
        choix1.innerHTML = "Votre gouvernement a du mal à prendre des décisions. Vous décidez de mettre à la porte les membres et d’en réélire des nouveaux<br><p style='text-align: center'>ou</p><br>Vous décidez de garder le même gouvernement mais vous faites un référendum pour que le pouvoir reviennent au peuple : c’est le principe de toute démocratie";
        casej1 = 29;
    }else if(x == "case2-10"){
        choix1.innerHTML = "Vous recevez ou perdez tout l'argent du park gratuit";
        drj1 += drpark;
        dr1.innerHTML = "Dollars : "+ drj1;
        drpark = 0;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x == "case2-11"){
        choix1.innerHTML = "La République démocratique du Congo a besoin de vous. Son président actuel Félix Tshisekedi demande une conférence d’urgence. Vous acceptez en tant que président de bon cœur<br><p style='text-align: center'>ou</p><br>Vous reportez la conférence car vous vous rendez compte qu’il n’y a aucun intérêt économique ni géopolitique";
        casej1 = 211;
    }else if(x == "case2-12"){
        choix1.innerHTML = "Vous considérez la liberté d’expression importante et faites passez une loi qui la garantit dans votre pays<br><p style='text-align: center'>ou</p><br>Vous la considérez illégale et faites en sorte de la condamner (Poutine)";
        casej1 = 212;
    }else if(x == "case2-13"){
        choix1.innerHTML = "Vous autorisez grâce à une loi le droit de vote pour tous<br><p style='text-align: center'>ou</p><br>Vous le réprimez en instaurant un gouvernement dictatorial";
        casej1 = 213;
    }else if(x == "case2-14"){
        choix1.innerHTML = "Vous considérez la liberté d’opinion importante et faites passez une loi qui la garantit dans votre pays<br><p style='text-align: center'>ou</p><br>Vous la considérez illégale et faites en sorte de la condamner (Poutine)";
        casej1 = 214;
    }else if(x == "case2-15"){
        choix1.innerHTML = "Passez votre tour et le tour suivant, vous êtes en prison";
    }else if(x == "case2-16"){
        choix1.innerHTML = "Vous estimez que le droit de grève est fondamental au changement<br><p style='text-align: center'>ou</p><br>Vous le réprimez en l’interdisant";
        casej1 = 216;
    }else if(x == "case2-17"){
        choix1.innerHTML = "Vous pensez qu’il est important d’avoir du temps pour soi et la famille et diminuez le temps de travail à 35h/semaine<br><p style='text-align: center'>ou</p><br>Vous pensez le contraire et augmentez le temps de travail à 45h/semaine pour engraisser les gains";
        casej1 = 217;
    }else if(x == "case2-18"){
        choix1.innerHTML = "Vous estimez que tout le monde peut s’exprimer en manifestant et l’autorisez<br><p style='text-align: center'>ou</p><br>Vous estimez que personne n’a le droit manifester et le censure à la prison";
        casej1 = 218
    }else if(x == "case2-19"){
        choix1.innerHTML = "Vous estimez qu’il est crucial d’avoir des ONG, tout le monde peut en créer une ou créer une association/organisation<br><p style='text-align: center'>ou</p><br>Vous interdisez les ONG";
        casej1 = 219;
    }else if(x == "case2-20"){
        cchoix1.innerHTML = "Vous passez sur la case départ : bonus de 500 000 dollars";
        drj1 += 500000;
        dr1.innerHTML = "Dollars : "+ drj1;
    }else if(x == "case3-1"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 31;
    }else if(x == "case3-2"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 32;
    }else if(x == "case3-3"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 33;
    }else if(x == "case3-4"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 34;
    }else if(x == "case3-5"){
        random = Math.floor(Math.random() * 2);
        if(random == 0){
            choix1.innerHTML = "test";
            ptsj1 -= 0;
            drj1 -= 0;
            drpark += 0;
        }else{
            choix1.innerHTML = "test";
            ptsj1 += 0;
            drj1 += 0; 
            drpark -= 0;
        }
        pts1.innerHTML = "Points : "+ ptsj1;
        dr1.innerHTML = "Dollars : "+ drj1;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x == "case3-6"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 36;
    }else if(x == "case3-7"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 37;
    }else if(x == "case3-8"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 38;
    }else if(x == "case3-9"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 39;
    }else if(x == "case3-10"){
        choix1.innerHTML = "Vous recevez ou perdez tout l'argent du park gratuit";
        drj1 += drpark;
        dr1.innerHTML = "Dollars : "+ drj1;
        drpark = 0;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x == "case3-11"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>.";
        casej1 = 311;
    }else if(x == "case3-12"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 312;
    }else if(x == "case3-13"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 313;
    }else if(x == "case3-14"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 314;
    }else if(x == "case3-15"){
        choix1.innerHTML = "Passez votre tour et le tour suivant, vous êtes en prison";
    }else if(x == "case3-16"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 316;
    }else if(x == "case3-17"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 317;
    }else if(x == "case3-18"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 318;
    }else if(x == "case3-19"){
        choix1.innerHTML = "<br><p style='text-align: center'>ou</p><br>";
        casej1 = 319;
    }else if(x == "case3-20"){
        choix1.innerHTML = "Vous passez sur la case départ : bonus de 500 000 dollars";
        drj1 += 500000;
        dr1.innerHTML = "Dollars : "+ drj1;
    }
}

function showpoints1(){
    var y =  document.getElementById('choixcases1').value;
    if(y == "choix1"){
        if(casej1 == 11){
            ptsj1 += 5000;
            drj1 += 0;
        }else if(casej1 == 12){
            ptsj1 += 7500;
            drj1 -= 50000;
        }else if(casej1 == 13){
            ptsj1 += 2500;
            drj1 -= 150000;
        }else if(casej1 == 14){
            ptsj1 += 4000;
            drj1 -= 200000;
        }else if(casej1 == 16){
            ptsj1 += 2400;
            drj1 -= 200000;
        }else if(casej1 == 17){
            ptsj1 += 1300;
            drj1 -= 130000;
        }else if(casej1 == 18){
            ptsj1 += 3500;
            drj1 -= 350000;
        }else if(casej1 == 19){
            ptsj1 += 1500;
            drj1 -= 150000;
        }else if(casej1 == 111){
            ptsj1 += 5000;
            drj1 -= 500000;
        }else if(casej1 == 112){
            ptsj1 += 2000;
            drj1 -= 200000;
        }else if(casej1 == 113){
            ptsj1 += 1000;
            drj1 -= 100000;
        }else if(casej1 == 114){
            ptsj1 += 500;
            drj1 -= 50000;
        }else if(casej1 == 116){
            ptsj1 += 2500;
            drj1 -= 250000;
        }else if(casej1 == 117){
            ptsj1 += 4500;
            drj1 -= 450000;
        }else if(casej1 == 118){
            ptsj1 += 8000;
            drj1 -= 800000;
        }else if(casej1 == 119){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 21){
            ptsj1 += 1000;
            drj1 -= 15000;
        }else if(casej1 == 22){
            ptsj1 -= 10000;
            drj1 -= 1500;
        }else if(casej1 == 23){
            ptsj1 += 0;
            drj1 += 3500;
        }else if(casej1 == 24){
            ptsj1 += 500;
            drj1 -= 500000;
        }else if(casej1 == 26){
            ptsj1 -= 800;
            drj1 += 0;
        }else if(casej1 == 27){
            ptsj1 += 5;
            drj1 -= 60000;
        }else if(casej1 == 28){
            ptsj1 += 3500;
            drj1 += 0;
        }else if(casej1 == 29){
            ptsj1 -= 5;
            drj1 -= 150000;
        }else if(casej1 == 211){
            ptsj1 += 1500;
            drj1 -= 30000;
        }else if(casej1 == 212){
            ptsj1 += 5000;
            drj1 -= 50000;
        }else if(casej1 == 213){
            ptsj1 += 5000;
            drj1 -= 50000;
        }else if(casej1 == 214){
            ptsj1 += 5000;
            drj1 -= 50000;
        }else if(casej1 == 216){
            ptsj1 += 5000;
            drj1 -= 50000;
        }else if(casej1 == 217){
            ptsj1 += 1500;
            drj1 -= 10000;
        }else if(casej1 == 218){
            ptsj1 += 2500;
            drj1 += 0;
        }else if(casej1 == 219){
            ptsj1 += 5000;
            drj1 += 0;
        }else if(casej1 == 31){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 32){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 33){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 34){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 36){
            ptsj1 += 10000;
            drj1 += 10000
        }else if(casej1 == 37){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 38){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 39){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 311){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 312){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 313){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 314){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 316){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 317){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 318){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 319){
            ptsj1 += 10000;
            drj1 += 10000;
        }
        pts1.innerHTML = "Points : "+ ptsj1;
        dr1.innerHTML = "Dollars : "+ drj1;
        casej1 = 0;
    }else if(y == "choix2"){
        if(casej1 == 11){
            ptsj1 -= 5000;
            drj1 += 0;
        }else if(casej1 == 12){
            ptsj1 -= 500;
            drj1 += 200000;
        }else if(casej1 == 13){
            ptsj1 -= 500;
            drj1 += 100000;
        }else if(casej1 == 14){
            ptsj1 -= 5000;
            drj1 += 75000;
        }else if(casej1 == 16){
            ptsj1 -= 1000;
            drj1 += 100000;
        }else if(casej1 == 17){
            ptsj1 -= 100;
            drj1 += 10000;
        }else if(casej1 == 18){
            ptsj1 -= 2500;
            drj1 += 250000;
        }else if(casej1 == 19){
            ptsj1 -= 3000;
            drj1 += 0;
        }else if(casej1 == 111){
            ptsj1 += 3500;
            drj1 += 350000;
        }else if(casej1 == 112){
            ptsj1 -= 1500;
            drj1 += 150000;
        }else if(casej1 == 113){
            ptsj1 -= 750;
            drj1 += 75000;
        }else if(casej1 == 114){
            ptsj1 -= 450;
            drj1 += 45000;
        }else if(casej1 == 116){
            ptsj1 -= 2500;
            drj1 += 250000;
        }else if(casej1 == 117){
            ptsj1 -= 4000;
            drj1 += 400000;
        }else if(casej1 == 118){
            ptsj1 -= 5000;
            drj1 += 500000;
        }else if(casej1 == 119){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 21){
            ptsj1 -= 500;
            drj1 += 0;
        }else if(casej1 == 22){
            ptsj1 += 1000;
            drj1 -= 50000;
        }else if(casej1 == 23){
            ptsj1 -= 3500;
            drj1 += 0;
        }else if(casej1 == 24){
            ptsj1 -= 300;
            drj1 += 0;
        }else if(casej1 == 26){
            ptsj1 += 1000;
            drj1 += 0;
        }else if(casej1 == 27){
            ptsj1 += 2000;
            drj1 -= 65000;
        }else if(casej1 == 28){
            ptsj1 -= 1500;
            drj1 += 0;
        }else if(casej1 == 29){
            ptsj1 += 5000;
            drj1 += 0;
        }else if(casej1 == 211){
            ptsj1 -= 3500;
            drj1 += 0;
        }else if(casej1 == 212){
            ptsj1 -= 6000;
            drj1 += 0;
        }else if(casej1 == 213){
            ptsj1 -= 5000;
            drj1 -= 50000;
        }else if(casej1 == 214){
            ptsj1 -= 6000;
            drj1 += 0;
        }else if(casej1 == 216){
            ptsj1 -= 6000;
            drj1 += 0;
        }else if(casej1 == 217){
            ptsj1 -= 4500;
            drj1 += 100000;
        }else if(casej1 == 218){
            ptsj1 -= 2500;
            drj1 -= 50000;
        }else if(casej1 == 219){
            ptsj1 += 5000;
            drj1 += 0;
        }else if(casej1 == 31){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 32){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 33){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 34){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 36){
            ptsj1 += 10000;
            drj1 += 10000
        }else if(casej1 == 37){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 38){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 39){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 311){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 312){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 313){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 314){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 316){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 317){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 318){
            ptsj1 += 10000;
            drj1 += 10000;
        }else if(casej1 == 319){
            ptsj1 += 10000;
            drj1 += 10000;
        }
        pts1.innerHTML = "Points : "+ ptsj1;
        dr1.innerHTML = "Dollars : "+ drj1;
        casej1 = 0;
    }
}

function depart1() {
    drj1 += 1000000
    dr1.innerHTML = "Dollars : "+ drj1;
}
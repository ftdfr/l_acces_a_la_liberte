var pts1 = document.getElementById('pts1');
var dr1 = document.getElementById('dr1');
var choix1 = document.getElementById('choix1');
var casej1 = 0;
var ptsj1 = 0;
var drj1 = 0;
var pts2 = document.getElementById('pts2');
var dr2 = document.getElementById('dr2');
var choix2 = document.getElementById('choix2');
var casej2 = 0;
var ptsj2 = 0;
var drj2 = 0;
var pts3 = document.getElementById('pts3');
var dr3 = document.getElementById('dr3');
var choix3 = document.getElementById('choix3');
var casej3 = 0;
var ptsj3 = 0;
var drj3 = 0;
var pts4 = document.getElementById('pts4');
var dr4 = document.getElementById('dr4');
var choix4 = document.getElementById('choix4');
var casej4 = 0;
var ptsj4 = 0;
var drj4 = 0;
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
        choix1.innerHTML = "Un manisfestion éclate dans votre compagnie aérienne nationale, les pilotes revendiquent plus de liberté d'expression. Soit vous n'écoutez pas les syndicats<br><p style='text-align: center'>ou</p><br>Soit vous leur laissez la parole et vous essayez de réunir les administrations aéronautiques afin de régler les problèmes";
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
    }
}

function points2(){
    var x1 = document.getElementById('cases2').value;
    if(x1 == "case1-1"){
        choix2.innerHTML = "Vous accordez plus de libertés de circulation à votre peuple ainsi ils pourront se déplacer librement comme l’air<br><p style='text-align: center'>ou</p><br>Vous limitez les déplacements de vos chers citoyens, ils ne peuvent désormais que se déplacer sur les trottoirs lorsqu’ils sont à pied et vous mettez en place un couvre-feu entre 22h et 6h";
        casej2 = 11;
    }else if(x1 == "case1-2"){
        choix2.innerHTML = "Vos citoyens se plaignent qu’Internet ne respecte pas leurs vies privées donc tu décides d’agir en protégeant les données personnelles de tous les utilisateurs<br><p style='text-align: center'>ou</p><br>Tu fermes les yeux puisqu’Internet est une source de revenue très importante";
        casej2 = 12;
    }else if(x1 == "case1-3"){
        choix2.innerHTML = "Vous pensez que la liberté de pensée est primordiale pour un être humain<br><p style='text-align: center'>ou</p><br>Vous considérez qu’il ne peut pas y avoir d’opinions sinon la société sera dans le désordre";
        casej2 = 13;
    }else if(x1 == "case1-4"){
        choix2.innerHTML = "Vous considérez le droit à la vie comme l’un des plus important car elle permet à tous les citoyens de jouir de leurs droits<br><p style='text-align: center'>ou</p><br>Vous ne considérez pas votre peuple comme des êtres vivants mais plutôt comme du bétail donc vous ne leurs accorder pas ce droit et qu’aucune loi ne la protège";
        casej2 = 14;
    }else if(x1 == "case1-5"){
        random = Math.floor(Math.random() * 2);
        if(random == 0){
            choix2.innerHTML = "Une crise économico-financière a lieu";
            ptsj2 -= 3000;
            drj2-= 350000;
            drpark += 350000;
        }else{
            choix2.innerHTML = "Vous bénéficiez de financements privés et publics d’Etats voisins";
            ptsj2 += 3000;
            drj2 += 350000;
            drpark -= 350000;
        }
        pts2.innerHTML = "Points : "+ ptsj2;
        dr2.innerHTML = "Dollars : "+ drj2;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x1 == "case1-6"){
        choix2.innerHTML = "L'objection de conscience consiste à refuser d'accomplir certains actes prescrits par la loi ou par les représentants de l'autorité en général, parce que contraires à des normes morales, éthiques ou religieuses fondées sur la liberté de conscience<br><p style='text-align: center'>ou</p><br>Vous ne considérez pas ce droit valable puisqu’il permet de refuser certain ordre et de passer à travers la loi";
        casej2 = 16;
    }else if(x1 == "case1-7"){
        choix2.innerHTML = "Pour vous ce droit est tout à fait normal puisque les citoyens ont travaillé dur pour obtenir ces biens<br><p style='text-align: center'>ou</p><br>Vous n’acceptez pas ce droit puisque pour vous il y a beaucoup d’inégalité dans votre territoire donc vous voulez que tous vos citoyens jouissent des mêmes biens";
        casej2 = 17;
    }else if(x1 == "case1-8"){
        choix2.innerHTML = "Vous considérez que les enfants de 16ans sont assez matures pour voter, que les personnes ne possédant pas la nationalité française peuvent aussi voter puisque chaque vote compte pour vous<br><p style='text-align: center'>ou</p><br>Vous allez changer les droits de vote pour que seulement ce qui ont une classe social supérieur à la moyenne peuvent voter";
        casej2 = 18;
    }else if(x1 == "case1-9"){
        choix2.innerHTML = "La liberté d'association consiste en la possibilité de former ou de rejoindre un groupe pour une durée prolongée. C'est le droit de constituer, d'adhérer et de refuser d'adhérer à une association<br>Vous l'accordez<br><p style='text-align: center'>ou</p><br>Vous ne la mettez pas en place";
        casej2 = 19;
    }else if(x1 == "case1-10"){
        choix2.innerHTML = "Vous recevez ou perdez tout l'argent du park gratuit";
        drj2 += drpark;
        dr2.innerHTML = "Dollars : "+ drj2;
        drpark = 0;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x1 == "case1-11"){
        choix2.innerHTML = "L’éducation compte énormément pour vous et vous voulez permettre à tous les enfants sans exception de s’enrichir culturellement sans payer de frais<br><p style='text-align: center'>ou</p><br>Pour vous seul ce qui payent les frais scolaires ont droit à l’éducation";
        casej2 = 111;
    }else if(x1 == "case1-12"){
        choix2.innerHTML = "Le droit à la sûreté protège les individus contre les arrestations et les emprisonnements arbitraires<br><p style='text-align: center'>ou</p><br>Vous considérez que ce qui enfreignent la loi doivent être sévèrement puni et ainsi perdre des libertés dans le futur";
        casej2 = 112;
    }else if(x1 == "case1-13"){
        choix2.innerHTML = "Vous considérez que le droit à l’image peut atteindre la vie privée et qu’il faut demander l’accord de la personne filmé pour pouvoir publier l’image ou vidéo sur Internet<br><p style='text-align: center'>ou</p><br>Ce droit pour vous est juste inutile puisque sur Internet il y a un très grand nombre d’image avec des têtes dessus donc ce sera juste une image comme les autres";
        casej2 = 113;
    }else if(x1 == "case1-14"){
        choix2.innerHTML = "Vous voulez mettre en place une loi pour que toutes les personnes mourantes choisissent comment leurs vies se terminent<br><p style='text-align: center'>ou</p><br>Vous vous en foutez des personnes mourantes puisque dans peu de temps ils ne seront plus là";
        casej2 = 114;
    }else if(x1 == "case1-15"){
        choix2.innerHTML = "Passez votre tour et le tour suivant, vous êtes en prison";
    }else if(x1 == "case1-16"){
        choix2.innerHTML = "Vous voulez conservez la dignité humaine et pour ce fait vous aménager une loi comme quoi le travail forcé, l’esclavage sont une pratique interdite<br><p style='text-align: center'>ou</p><br>Cela vous importe peu puisque tant que ça rapporte de l’argent au gouvernement toutes les manières sont valables";
        casej2 = 116;
    }else if(x1 == "case1-17"){
        choix2.innerHTML = "Beaucoup d’enfant non-désiré naissent puisque l’avortement est illégal et très dangereux pour ce fait vous décider d’agir en formant plus de chirurgien dans ce domaine, de faire des recherches et légaliser l’avortement<br><p style='text-align: center'>ou</p><br>Vous n’acceptez pas l’avortement puisque ça tue un enfant même si c’est un embryon cela vous brise le cœur";
        casej2 = 117;
    }else if(x1 == "case1-18"){
        choix2.innerHTML = "Pour vous le droit à la santé permet de garantir à toute personne un accès égalitaire aux soins nécessités par son état de santé, sans discrimination gratuitement<br><p style='text-align: center'>ou</p><br>Vous considérez que le matériel médical est très couteux donc pour couvrir les frais tous les patients doivent payer";
        casej2 = 118;
    }else if(x1 == "case1-19"){
        choix2.innerHTML = "Un manisfestion éclate dans votre compagnie aérienne nationale, les pilotes revendiquent plus de liberté d'expression. Soit vous n'écoutez pas les syndicats<br><p style='text-align: center'>ou</p><br>Soit vous leur laissez la parole et vous essayez de réunir les administrations aéronautiques afin de régler les problèmes";
        casej2 = 119;
    }else if(x1 == "case1-20"){
        choix2.innerHTML = "Vous passez sur la case départ : bonus de 500 000 dollars";
        drj3 += 500000;
        dr3.innerHTML = "Dollars : "+ drj2;
    }else if(x1 == "case2-1"){
        choix2.innerHTML = "Les députés votent à l’unanimité la loi suivante : La SPA reçoit plus de fonds, la santé des animaux est importante<br>Vous acceptez<br><p style='text-align: center'>ou</p><br>Vous refusez";
        casej2 = 21;
    }else if(x1 == "case2-2"){
        choix2.innerHTML = "Le peuple exige d’être entendu et menace de manifester. Envoyer les forces de l’ordre et calmer le jeu de force<br><p style='text-align: center'>ou</p><br>Laisser les manifestants sous surveillance";
        casej2 = 22;
    }else if(x1 == "case2-3"){
        choix2.innerHTML = "Pour vous, toutes les religions/cultes doivent être acceptés et vous accordez la liberté à tous de croire en n’importe quelle religion<br><p style='text-align: center'>ou</p><br>Selon vous, cette liberté est négligeable, vous l’interdisez de votre pays";
        casej2 = 23;
    }else if(x1 == "case2-4"){
        choix2.innerHTML = "L’ambassade demande l’autorisation de déplacement pour entamer des négociations avec le géant du pétrole FUEL pour maximiser les productions du pays<br>Vous acceptez<br><p style='text-align: center'>ou</p><br>Vous refusez";
        casej2 = 24
    }else if(x1 == "case2-5"){
        random = Math.floor(Math.random() * 2);
        if(random == 0){
            choix2.innerHTML = "Guerre : le pays voisin a décidé de vous visiter en tank (comme Poutine le fait)";
            ptsj2 -= 3000;
            drj2 -= 400000;
            drpark += 400000;
        }else{
            choix2.innerHTML = "Vous êtes un bon président, les maires et votre parti vous financent";
            ptsj2 += 3000;
            drj2 += 350000;
            drpark -= 350000;
        }
        pts2.innerHTML = "Points : "+ ptsj2;
        dr2.innerHTML = "Dollars : "+ drj2;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x1 == "case2-6"){
        choix2.innerHTML = "Le parlement et le sénat sont contre le projet de loi sur le retour de la peine de mort. Vous êtes totalement d’accord et forcez le passage du projet de loi<br><p style='text-align: center'>ou</p><br>Vous trouvez le projet absurde et retirez le projet de loi";
        casej2 = 26;
    }else if(x1 == "case2-7"){
        choix2.innerHTML = "Votre palais présidentiel est entouré de casseurs furieux, vous estimez que la menace est négligeable<br><p style='text-align: center'>ou</p><br>Vous déployez les forces de l’ordres et assurez la paix dans les environs";
        casej2 = 27;
    }else if(x1 == "case2-8"){
        choix2.innerHTML = "Vous rejoignez l’OTAN car vos frontaliers vous menacent<br><p style='text-align: center'>ou</p><br>Vous ne le faite pas car la guerre c'est bien et vous voulez gagner du territioire (Poutine)";
        casej2 = 28;
    }else if(x1 == "case2-9"){
        choix2.innerHTML = "Votre gouvernement a du mal à prendre des décisions. Vous décidez de mettre à la porte les membres et d’en réélire des nouveaux<br><p style='text-align: center'>ou</p><br>Vous décidez de garder le même gouvernement mais vous faites un référendum pour que le pouvoir reviennent au peuple : c’est le principe de toute démocratie";
        casej2 = 29;
    }else if(x1 == "case2-10"){
        choix2.innerHTML = "Vous recevez ou perdez tout l'argent du park gratuit";
        drj2 += drpark;
        dr2.innerHTML = "Dollars : "+ drj2;
        drpark = 0;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x1 == "case2-11"){
        choix2.innerHTML = "La République démocratique du Congo a besoin de vous. Son président actuel Félix Tshisekedi demande une conférence d’urgence. Vous acceptez en tant que président de bon cœur<br><p style='text-align: center'>ou</p><br>Vous reportez la conférence car vous vous rendez compte qu’il n’y a aucun intérêt économique ni géopolitique";
        casej2 = 211;
    }else if(x1 == "case2-12"){
        choix2.innerHTML = "Vous considérez la liberté d’expression importante et faites passez une loi qui la garantit dans votre pays<br><p style='text-align: center'>ou</p><br>Vous la considérez illégale et faites en sorte de la condamner (Poutine)";
        casej2 = 212;
    }else if(x1 == "case2-13"){
        choix2.innerHTML = "Vous autorisez grâce à une loi le droit de vote pour tous<br><p style='text-align: center'>ou</p><br>Vous le réprimez en instaurant un gouvernement dictatorial";
        casej2 = 213;
    }else if(x1 == "case2-14"){
        choix2.innerHTML = "Vous considérez la liberté d’opinion importante et faites passez une loi qui la garantit dans votre pays<br><p style='text-align: center'>ou</p><br>Vous la considérez illégale et faites en sorte de la condamner (Poutine)";
        casej2 = 214;
    }else if(x1 == "case2-15"){
        choix2.innerHTML = "Passez votre tour et le tour suivant, vous êtes en prison";
    }else if(x1 == "case2-16"){
        choix2.innerHTML = "Vous estimez que le droit de grève est fondamental au changement<br><p style='text-align: center'>ou</p><br>Vous le réprimez en l’interdisant";
        casej2 = 216;
    }else if(x1 == "case2-17"){
        choix2.innerHTML = "Vous pensez qu’il est important d’avoir du temps pour soi et la famille et diminuez le temps de travail à 35h/semaine<br><p style='text-align: center'>ou</p><br>Vous pensez le contraire et augmentez le temps de travail à 45h/semaine pour engraisser les gains";
        casej2 = 217;
    }else if(x1 == "case2-18"){
        choix2.innerHTML = "Vous estimez que tout le monde peut s’exprimer en manifestant et l’autorisez<br><p style='text-align: center'>ou</p><br>Vous estimez que personne n’a le droit manifester et le censure à la prison";
        casej2 = 218
    }else if(x1 == "case2-19"){
        choix2.innerHTML = "Vous estimez qu’il est crucial d’avoir des ONG, tout le monde peut en créer une ou créer une association/organisation<br><p style='text-align: center'>ou</p><br>Vous interdisez les ONG";
        casej2 = 219;
    }else if(x1 == "case2-20"){
        choix2.innerHTML = "Vous passez sur la case départ : bonus de 500 000 dollars";
        drj2 += 500000;
        dr2.innerHTML = "Dollars : "+ drj2;
    }
}

function points3(){
    var x2 = document.getElementById('cases3').value;
    if(x2 == "case1-1"){
        choix3.innerHTML = "Vous accordez plus de libertés de circulation à votre peuple ainsi ils pourront se déplacer librement comme l’air<br><p style='text-align: center'>ou</p><br>Vous limitez les déplacements de vos chers citoyens, ils ne peuvent désormais que se déplacer sur les trottoirs lorsqu’ils sont à pied et vous mettez en place un couvre-feu entre 22h et 6h";
        casej3 = 11;
    }else if(x2 == "case1-2"){
        choix3.innerHTML = "Vos citoyens se plaignent qu’Internet ne respecte pas leurs vies privées donc tu décides d’agir en protégeant les données personnelles de tous les utilisateurs<br><p style='text-align: center'>ou</p><br>Tu fermes les yeux puisqu’Internet est une source de revenue très importante";
        casej3 = 12;
    }else if(x2 == "case1-3"){
        choix3.innerHTML = "Vous pensez que la liberté de pensée est primordiale pour un être humain<br><p style='text-align: center'>ou</p><br>Vous considérez qu’il ne peut pas y avoir d’opinions sinon la société sera dans le désordre";
        casej3 = 13;
    }else if(x2 == "case1-4"){
        choix3.innerHTML = "Vous considérez le droit à la vie comme l’un des plus important car elle permet à tous les citoyens de jouir de leurs droits<br><p style='text-align: center'>ou</p><br>Vous ne considérez pas votre peuple comme des êtres vivants mais plutôt comme du bétail donc vous ne leurs accorder pas ce droit et qu’aucune loi ne la protège";
        casej3 = 14;
    }else if(x2 == "case1-5"){
        random = Math.floor(Math.random() * 2);
        if(random == 0){
            choix3.innerHTML = "Une crise économico-financière a lieu";
            ptsj3 -= 3000;
            drj3 -= 350000;
            drpark += 350000;
        }else{
            choix3.innerHTML = "Vous bénéficiez de financements privés et publics d’Etats voisins";
            ptsj3 += 3000;
            drj3 += 350000;
            drpark -= 350000;
        }
        pts3.innerHTML = "Points : "+ ptsj3;
        dr3.innerHTML = "Dollars : "+ drj3;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x2 == "case1-6"){
        choix3.innerHTML = "L'objection de conscience consiste à refuser d'accomplir certains actes prescrits par la loi ou par les représentants de l'autorité en général, parce que contraires à des normes morales, éthiques ou religieuses fondées sur la liberté de conscience<br><p style='text-align: center'>ou</p><br>Vous ne considérez pas ce droit valable puisqu’il permet de refuser certain ordre et de passer à travers la loi";
        casej3 = 16;
    }else if(x2 == "case1-7"){
        choix3.innerHTML = "Pour vous ce droit est tout à fait normal puisque les citoyens ont travaillé dur pour obtenir ces biens<br><p style='text-align: center'>ou</p><br>Vous n’acceptez pas ce droit puisque pour vous il y a beaucoup d’inégalité dans votre territoire donc vous voulez que tous vos citoyens jouissent des mêmes biens";
        casej3 = 17;
    }else if(x2 == "case1-8"){
        choix3.innerHTML = "Vous considérez que les enfants de 16ans sont assez matures pour voter, que les personnes ne possédant pas la nationalité française peuvent aussi voter puisque chaque vote compte pour vous<br><p style='text-align: center'>ou</p><br>Vous allez changer les droits de vote pour que seulement ce qui ont une classe social supérieur à la moyenne peuvent voter";
        casej3 = 18;
    }else if(x2 == "case1-9"){
        choix3.innerHTML = "La liberté d'association consiste en la possibilité de former ou de rejoindre un groupe pour une durée prolongée. C'est le droit de constituer, d'adhérer et de refuser d'adhérer à une association<br>Vous l'accordez<br><p style='text-align: center'>ou</p><br>Vous ne la mettez pas en place";
        casej3 = 19;
    }else if(x2 == "case1-10"){
        choix3.innerHTML = "Vous recevez ou perdez tout l'argent du park gratuit";
        drj3 += drpark;
        dr3.innerHTML = "Dollars : "+ drj3;
        drpark = 0;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x2 == "case1-11"){
        choix3.innerHTML = "L’éducation compte énormément pour vous et vous voulez permettre à tous les enfants sans exception de s’enrichir culturellement sans payer de frais<br><p style='text-align: center'>ou</p><br>Pour vous seul ce qui payent les frais scolaires ont droit à l’éducation";
        casej3 = 111;
    }else if(x2 == "case1-12"){
        choix3.innerHTML = "Le droit à la sûreté protège les individus contre les arrestations et les emprisonnements arbitraires<br><p style='text-align: center'>ou</p><br>Vous considérez que ce qui enfreignent la loi doivent être sévèrement puni et ainsi perdre des libertés dans le futur";
        casej3 = 112;
    }else if(x2 == "case1-13"){
        choix3.innerHTML = "Vous considérez que le droit à l’image peut atteindre la vie privée et qu’il faut demander l’accord de la personne filmé pour pouvoir publier l’image ou vidéo sur Internet<br><p style='text-align: center'>ou</p><br>Ce droit pour vous est juste inutile puisque sur Internet il y a un très grand nombre d’image avec des têtes dessus donc ce sera juste une image comme les autres";
        casej3 = 113;
    }else if(x2 == "case1-14"){
        choix3.innerHTML = "Vous voulez mettre en place une loi pour que toutes les personnes mourantes choisissent comment leurs vies se terminent<br><p style='text-align: center'>ou</p><br>Vous vous en foutez des personnes mourantes puisque dans peu de temps ils ne seront plus là";
        casej3 = 114;
    }else if(x2 == "case1-15"){
        choix3.innerHTML = "Passez votre tour et le tour suivant, vous êtes en prison";
    }else if(x2 == "case1-16"){
        choix3.innerHTML = "Vous voulez conservez la dignité humaine et pour ce fait vous aménager une loi comme quoi le travail forcé, l’esclavage sont une pratique interdite<br><p style='text-align: center'>ou</p><br>Cela vous importe peu puisque tant que ça rapporte de l’argent au gouvernement toutes les manières sont valables";
        casej3 = 116;
    }else if(x2 == "case1-17"){
        choix3.innerHTML = "Beaucoup d’enfant non-désiré naissent puisque l’avortement est illégal et très dangereux pour ce fait vous décider d’agir en formant plus de chirurgien dans ce domaine, de faire des recherches et légaliser l’avortement<br><p style='text-align: center'>ou</p><br>Vous n’acceptez pas l’avortement puisque ça tue un enfant même si c’est un embryon cela vous brise le cœur";
        casej3 = 117;
    }else if(x2 == "case1-18"){
        choix3.innerHTML = "Pour vous le droit à la santé permet de garantir à toute personne un accès égalitaire aux soins nécessités par son état de santé, sans discrimination gratuitement<br><p style='text-align: center'>ou</p><br>Vous considérez que le matériel médical est très couteux donc pour couvrir les frais tous les patients doivent payer";
        casej3 = 118;
    }else if(x2 == "case1-19"){
        choix3.innerHTML = "Un manisfestion éclate dans votre compagnie aérienne nationale, les pilotes revendiquent plus de liberté d'expression. Soit vous n'écoutez pas les syndicats<br><p style='text-align: center'>ou</p><br>Soit vous leur laissez la parole et vous essayez de réunir les administrations aéronautiques afin de régler les problèmes";
        casej3 = 119;
    }else if(x2 == "case1-20"){
        choix3.innerHTML = "Vous passez sur la case départ : bonus de 500 000 dollars";
        drj3 += 500000;
        dr3.innerHTML = "Dollars : "+ drj3;
    }else if(x2 == "case2-1"){
        choix3.innerHTML = "Les députés votent à l’unanimité la loi suivante : La SPA reçoit plus de fonds, la santé des animaux est importante<br>Vous acceptez<br><p style='text-align: center'>ou</p><br>Vous refusez";
        casej3 = 21;
    }else if(x2 == "case2-2"){
        choix3.innerHTML = "Le peuple exige d’être entendu et menace de manifester. Envoyer les forces de l’ordre et calmer le jeu de force<br><p style='text-align: center'>ou</p><br>Laisser les manifestants sous surveillance";
        casej3 = 22;
    }else if(x2 == "case2-3"){
        choix3.innerHTML = "Pour vous, toutes les religions/cultes doivent être acceptés et vous accordez la liberté à tous de croire en n’importe quelle religion<br><p style='text-align: center'>ou</p><br>Selon vous, cette liberté est négligeable, vous l’interdisez de votre pays";
        casej3 = 23;
    }else if(x2 == "case2-4"){
        choix3.innerHTML = "L’ambassade demande l’autorisation de déplacement pour entamer des négociations avec le géant du pétrole FUEL pour maximiser les productions du pays<br>Vous acceptez<br><p style='text-align: center'>ou</p><br>Vous refusez";
        casej3 = 24
    }else if(x2 == "case2-5"){
        random = Math.floor(Math.random() * 2);
        if(random == 0){
            choix3.innerHTML = "Guerre : le pays voisin a décidé de vous visiter en tank (comme Poutine le fait)";
            ptsj3 -= 3000;
            drj3 -= 400000;
            drpark += 400000;
        }else{
            choix3.innerHTML = "Vous êtes un bon président, les maires et votre parti vous financent";
            ptsj3 += 3000;
            drj3 += 350000;
            drpark -= 350000;
        }
        pts3.innerHTML = "Points : "+ ptsj3;
        dr3.innerHTML = "Dollars : "+ drj3;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x == "case2-6"){
        choix3.innerHTML = "Le parlement et le sénat sont contre le projet de loi sur le retour de la peine de mort. Vous êtes totalement d’accord et forcez le passage du projet de loi<br><p style='text-align: center'>ou</p><br>Vous trouvez le projet absurde et retirez le projet de loi";
        casej3 = 26;
    }else if(x2 == "case2-7"){
        choix3.innerHTML = "Votre palais présidentiel est entouré de casseurs furieux, vous estimez que la menace est négligeable<br><p style='text-align: center'>ou</p><br>Vous déployez les forces de l’ordres et assurez la paix dans les environs";
        casej3 = 27;
    }else if(x2 == "case2-8"){
        choix3.innerHTML = "Vous rejoignez l’OTAN car vos frontaliers vous menacent<br><p style='text-align: center'>ou</p><br>Vous ne le faite pas car la guerre c'est bien et vous voulez gagner du territioire (Poutine)";
        casej3 = 28;
    }else if(x2 == "case2-9"){
        choix3.innerHTML = "Votre gouvernement a du mal à prendre des décisions. Vous décidez de mettre à la porte les membres et d’en réélire des nouveaux<br><p style='text-align: center'>ou</p><br>Vous décidez de garder le même gouvernement mais vous faites un référendum pour que le pouvoir reviennent au peuple : c’est le principe de toute démocratie";
        casej3 = 29;
    }else if(x2 == "case2-10"){
        choix3.innerHTML = "Vous recevez ou perdez tout l'argent du park gratuit";
        drj3 += drpark;
        dr3.innerHTML = "Dollars : "+ drj3;
        drpark = 0;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x2 == "case2-11"){
        choix3.innerHTML = "La République démocratique du Congo a besoin de vous. Son président actuel Félix Tshisekedi demande une conférence d’urgence. Vous acceptez en tant que président de bon cœur<br><p style='text-align: center'>ou</p><br>Vous reportez la conférence car vous vous rendez compte qu’il n’y a aucun intérêt économique ni géopolitique";
        casej3 = 211;
    }else if(x2 == "case2-12"){
        choix3.innerHTML = "Vous considérez la liberté d’expression importante et faites passez une loi qui la garantit dans votre pays<br><p style='text-align: center'>ou</p><br>Vous la considérez illégale et faites en sorte de la condamner (Poutine)";
        casej3 = 212;
    }else if(x2 == "case2-13"){
        choix3.innerHTML = "Vous autorisez grâce à une loi le droit de vote pour tous<br><p style='text-align: center'>ou</p><br>Vous le réprimez en instaurant un gouvernement dictatorial";
        casej3 = 213;
    }else if(x2 == "case2-14"){
        choix3.innerHTML = "Vous considérez la liberté d’opinion importante et faites passez une loi qui la garantit dans votre pays<br><p style='text-align: center'>ou</p><br>Vous la considérez illégale et faites en sorte de la condamner (Poutine)";
        casej3 = 214;
    }else if(x2 == "case2-15"){
        choix3.innerHTML = "Passez votre tour et le tour suivant, vous êtes en prison";
    }else if(x == "case2-16"){
        choix3.innerHTML = "Vous estimez que le droit de grève est fondamental au changement<br><p style='text-align: center'>ou</p><br>Vous le réprimez en l’interdisant";
        casej3 = 216;
    }else if(x2 == "case2-17"){
        choix3.innerHTML = "Vous pensez qu’il est important d’avoir du temps pour soi et la famille et diminuez le temps de travail à 35h/semaine<br><p style='text-align: center'>ou</p><br>Vous pensez le contraire et augmentez le temps de travail à 45h/semaine pour engraisser les gains";
        casej3 = 217;
    }else if(x2 == "case2-18"){
        choix3.innerHTML = "Vous estimez que tout le monde peut s’exprimer en manifestant et l’autorisez<br><p style='text-align: center'>ou</p><br>Vous estimez que personne n’a le droit manifester et le censure à la prison";
        casej3 = 218
    }else if(x == "case2-19"){
        choix3.innerHTML = "Vous estimez qu’il est crucial d’avoir des ONG, tout le monde peut en créer une ou créer une association/organisation<br><p style='text-align: center'>ou</p><br>Vous interdisez les ONG";
        casej3 = 219;
    }else if(x2 == "case2-20"){
        choix3.innerHTML = "Vous passez sur la case départ : bonus de 500 000 dollars";
        drj3 += 500000;
        dr3.innerHTML = "Dollars : "+ drj3;
    }
}

function points4(){
    var x3 = document.getElementById('cases4').value;
    if(x3 == "case1-1"){
        choix4.innerHTML = "Vous accordez plus de libertés de circulation à votre peuple ainsi ils pourront se déplacer librement comme l’air<br><p style='text-align: center'>ou</p><br>Vous limitez les déplacements de vos chers citoyens, ils ne peuvent désormais que se déplacer sur les trottoirs lorsqu’ils sont à pied et vous mettez en place un couvre-feu entre 22h et 6h";
        casej4 = 11;
    }else if(x3 == "case1-2"){
        choix4.innerHTML = "Vos citoyens se plaignent qu’Internet ne respecte pas leurs vies privées donc tu décides d’agir en protégeant les données personnelles de tous les utilisateurs<br><p style='text-align: center'>ou</p><br>Tu fermes les yeux puisqu’Internet est une source de revenue très importante";
        casej4 = 12;
    }else if(x3 == "case1-3"){
        choix4.innerHTML = "Vous pensez que la liberté de pensée est primordiale pour un être humain<br><p style='text-align: center'>ou</p><br>Vous considérez qu’il ne peut pas y avoir d’opinions sinon la société sera dans le désordre";
        casej4 = 13;
    }else if(x3 == "case1-4"){
        choix4.innerHTML = "Vous considérez le droit à la vie comme l’un des plus important car elle permet à tous les citoyens de jouir de leurs droits<br><p style='text-align: center'>ou</p><br>Vous ne considérez pas votre peuple comme des êtres vivants mais plutôt comme du bétail donc vous ne leurs accorder pas ce droit et qu’aucune loi ne la protège";
        casej4 = 14;
    }else if(x3 == "case1-5"){
        random = Math.floor(Math.random() * 2);
        if(random == 0){
            choix4.innerHTML = "Une crise économico-financière a lieu";
            ptsj4 -= 3000;
            drj4 -= 350000;
            drpark += 350000;
        }else{
            choix4.innerHTML = "Vous bénéficiez de financements privés et publics d’Etats voisins";
            ptsj4 += 3000;
            drj4 += 350000;
            drpark -= 350000;
        }
        pts4.innerHTML = "Points : "+ ptsj4;
        dr4.innerHTML = "Dollars : "+ drj4;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x3 == "case1-6"){
        choix4.innerHTML = "L'objection de conscience consiste à refuser d'accomplir certains actes prescrits par la loi ou par les représentants de l'autorité en général, parce que contraires à des normes morales, éthiques ou religieuses fondées sur la liberté de conscience<br><p style='text-align: center'>ou</p><br>Vous ne considérez pas ce droit valable puisqu’il permet de refuser certain ordre et de passer à travers la loi";
        casej4 = 16;
    }else if(x3 == "case1-7"){
        choix4.innerHTML = "Pour vous ce droit est tout à fait normal puisque les citoyens ont travaillé dur pour obtenir ces biens<br><p style='text-align: center'>ou</p><br>Vous n’acceptez pas ce droit puisque pour vous il y a beaucoup d’inégalité dans votre territoire donc vous voulez que tous vos citoyens jouissent des mêmes biens";
        casej4 = 17;
    }else if(x3 == "case1-8"){
        choix4.innerHTML = "Vous considérez que les enfants de 16ans sont assez matures pour voter, que les personnes ne possédant pas la nationalité française peuvent aussi voter puisque chaque vote compte pour vous<br><p style='text-align: center'>ou</p><br>Vous allez changer les droits de vote pour que seulement ce qui ont une classe social supérieur à la moyenne peuvent voter";
        casej4 = 18;
    }else if(x3 == "case1-9"){
        choix4.innerHTML = "La liberté d'association consiste en la possibilité de former ou de rejoindre un groupe pour une durée prolongée. C'est le droit de constituer, d'adhérer et de refuser d'adhérer à une association<br>Vous l'accordez<br><p style='text-align: center'>ou</p><br>Vous ne la mettez pas en place";
        casej4 = 19;
    }else if(x3 == "case1-10"){
        choix4.innerHTML = "Vous recevez ou perdez tout l'argent du park gratuit";
        drj4 += drpark;
        dr4.innerHTML = "Dollars : "+ drj4;
        drpark = 0;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x3 == "case1-11"){
        choix4.innerHTML = "L’éducation compte énormément pour vous et vous voulez permettre à tous les enfants sans exception de s’enrichir culturellement sans payer de frais<br><p style='text-align: center'>ou</p><br>Pour vous seul ce qui payent les frais scolaires ont droit à l’éducation";
        casej4 = 111;
    }else if(x3 == "case1-12"){
        choix4.innerHTML = "Le droit à la sûreté protège les individus contre les arrestations et les emprisonnements arbitraires<br><p style='text-align: center'>ou</p><br>Vous considérez que ce qui enfreignent la loi doivent être sévèrement puni et ainsi perdre des libertés dans le futur";
        casej4 = 112;
    }else if(x3 == "case1-13"){
        choix4.innerHTML = "Vous considérez que le droit à l’image peut atteindre la vie privée et qu’il faut demander l’accord de la personne filmé pour pouvoir publier l’image ou vidéo sur Internet<br><p style='text-align: center'>ou</p><br>Ce droit pour vous est juste inutile puisque sur Internet il y a un très grand nombre d’image avec des têtes dessus donc ce sera juste une image comme les autres";
        casej4 = 113;
    }else if(x3 == "case1-14"){
        choix4.innerHTML = "Vous voulez mettre en place une loi pour que toutes les personnes mourantes choisissent comment leurs vies se terminent<br><p style='text-align: center'>ou</p><br>Vous vous en foutez des personnes mourantes puisque dans peu de temps ils ne seront plus là";
        casej4 = 114;
    }else if(x3 == "case1-15"){
        choix4.innerHTML = "Passez votre tour et le tour suivant, vous êtes en prison";
    }else if(x3 == "case1-16"){
        choix4.innerHTML = "Vous voulez conservez la dignité humaine et pour ce fait vous aménager une loi comme quoi le travail forcé, l’esclavage sont une pratique interdite<br><p style='text-align: center'>ou</p><br>Cela vous importe peu puisque tant que ça rapporte de l’argent au gouvernement toutes les manières sont valables";
        casej4 = 116;
    }else if(x3 == "case1-17"){
        choix4.innerHTML = "Beaucoup d’enfant non-désiré naissent puisque l’avortement est illégal et très dangereux pour ce fait vous décider d’agir en formant plus de chirurgien dans ce domaine, de faire des recherches et légaliser l’avortement<br><p style='text-align: center'>ou</p><br>Vous n’acceptez pas l’avortement puisque ça tue un enfant même si c’est un embryon cela vous brise le cœur";
        casej4 = 117;
    }else if(x3 == "case1-18"){
        choix4.innerHTML = "Pour vous le droit à la santé permet de garantir à toute personne un accès égalitaire aux soins nécessités par son état de santé, sans discrimination gratuitement<br><p style='text-align: center'>ou</p><br>Vous considérez que le matériel médical est très couteux donc pour couvrir les frais tous les patients doivent payer";
        casej4 = 118;
    }else if(x3 == "case1-19"){
        choix4.innerHTML = "Un manisfestion éclate dans votre compagnie aérienne nationale, les pilotes revendiquent plus de liberté d'expression. Soit vous n'écoutez pas les syndicats<br><p style='text-align: center'>ou</p><br>Soit vous leur laissez la parole et vous essayez de réunir les administrations aéronautiques afin de régler les problèmes";
        casej4 = 119;
    }else if(x3 == "case1-20"){
        choix4.innerHTML = "Vous passez sur la case départ : bonus de 500 000 dollars";
        drj4 += 500000;
        dr4.innerHTML = "Dollars : "+ drj4;
    }else if(x3 == "case2-1"){
        choix4.innerHTML = "Les députés votent à l’unanimité la loi suivante : La SPA reçoit plus de fonds, la santé des animaux est importante<br>Vous acceptez<br><p style='text-align: center'>ou</p><br>Vous refusez";
        casej4 = 21;
    }else if(x3 == "case2-2"){
        choix4.innerHTML = "Le peuple exige d’être entendu et menace de manifester. Envoyer les forces de l’ordre et calmer le jeu de force<br><p style='text-align: center'>ou</p><br>Laisser les manifestants sous surveillance";
        casej4 = 22;
    }else if(x3 == "case2-3"){
        choix4.innerHTML = "Pour vous, toutes les religions/cultes doivent être acceptés et vous accordez la liberté à tous de croire en n’importe quelle religion<br><p style='text-align: center'>ou</p><br>Selon vous, cette liberté est négligeable, vous l’interdisez de votre pays";
        casej4 = 23;
    }else if(x3 == "case2-4"){
        choix4.innerHTML = "L’ambassade demande l’autorisation de déplacement pour entamer des négociations avec le géant du pétrole FUEL pour maximiser les productions du pays<br>Vous acceptez<br><p style='text-align: center'>ou</p><br>Vous refusez";
        casej4 = 24
    }else if(x3 == "case2-5"){
        random = Math.floor(Math.random() * 2);
        if(random == 0){
            choix4.innerHTML = "Guerre : le pays voisin a décidé de vous visiter en tank (comme Poutine le fait)";
            ptsj4 -= 3000;
            drj4 -= 400000;
            drpark += 400000;
        }else{
            choix4.innerHTML = "Vous êtes un bon président, les maires et votre parti vous financent";
            ptsj4 += 3000;
            drj4 += 350000;
            drpark -= 350000;
        }
        pts4.innerHTML = "Points : "+ ptsj4;
        dr4.innerHTML = "Dollars : "+ drj4;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x3 == "case2-6"){
        choix4.innerHTML = "Le parlement et le sénat sont contre le projet de loi sur le retour de la peine de mort. Vous êtes totalement d’accord et forcez le passage du projet de loi<br><p style='text-align: center'>ou</p><br>Vous trouvez le projet absurde et retirez le projet de loi";
        casej4 = 26;
    }else if(x3 == "case2-7"){
        choix4.innerHTML = "Votre palais présidentiel est entouré de casseurs furieux, vous estimez que la menace est négligeable<br><p style='text-align: center'>ou</p><br>Vous déployez les forces de l’ordres et assurez la paix dans les environs";
        casej4 = 27;
    }else if(x3 == "case2-8"){
        choix4.innerHTML = "Vous rejoignez l’OTAN car vos frontaliers vous menacent<br><p style='text-align: center'>ou</p><br>Vous ne le faite pas car la guerre c'est bien et vous voulez gagner du territioire (Poutine)";
        casej4 = 28;
    }else if(x3 == "case2-9"){
        choix4.innerHTML = "Votre gouvernement a du mal à prendre des décisions. Vous décidez de mettre à la porte les membres et d’en réélire des nouveaux<br><p style='text-align: center'>ou</p><br>Vous décidez de garder le même gouvernement mais vous faites un référendum pour que le pouvoir reviennent au peuple : c’est le principe de toute démocratie";
        casej4 = 29;
    }else if(x3 == "case2-10"){
        choix4.innerHTML = "Vous recevez ou perdez tout l'argent du park gratuit";
        drj4 += drpark;
        dr4.innerHTML = "Dollars : "+ drj4;
        drpark = 0;
        compteurpark.innerHTML =  "Argent dans le park gratuit : " + drpark + " dollars"
    }else if(x3 == "case2-11"){
        choix4.innerHTML = "La République démocratique du Congo a besoin de vous. Son président actuel Félix Tshisekedi demande une conférence d’urgence. Vous acceptez en tant que président de bon cœur<br><p style='text-align: center'>ou</p><br>Vous reportez la conférence car vous vous rendez compte qu’il n’y a aucun intérêt économique ni géopolitique";
        casej4 = 211;
    }else if(x3 == "case2-12"){
        choix4.innerHTML = "Vous considérez la liberté d’expression importante et faites passez une loi qui la garantit dans votre pays<br><p style='text-align: center'>ou</p><br>Vous la considérez illégale et faites en sorte de la condamner (Poutine)";
        casej4 = 212;
    }else if(x3 == "case2-13"){
        choix4.innerHTML = "Vous autorisez grâce à une loi le droit de vote pour tous<br><p style='text-align: center'>ou</p><br>Vous le réprimez en instaurant un gouvernement dictatorial";
        casej4 = 213;
    }else if(x3 == "case2-14"){
        choix4.innerHTML = "Vous considérez la liberté d’opinion importante et faites passez une loi qui la garantit dans votre pays<br><p style='text-align: center'>ou</p><br>Vous la considérez illégale et faites en sorte de la condamner (Poutine)";
        casej4 = 214;
    }else if(x3 == "case2-15"){
        choix4.innerHTML = "Passez votre tour et le tour suivant, vous êtes en prison";
    }else if(x3 == "case2-16"){
        choix4.innerHTML = "Vous estimez que le droit de grève est fondamental au changement<br><p style='text-align: center'>ou</p><br>Vous le réprimez en l’interdisant";
        casej4 = 216;
    }else if(x3 == "case2-17"){
        choix4.innerHTML = "Vous pensez qu’il est important d’avoir du temps pour soi et la famille et diminuez le temps de travail à 35h/semaine<br><p style='text-align: center'>ou</p><br>Vous pensez le contraire et augmentez le temps de travail à 45h/semaine pour engraisser les gains";
        casej4 = 217;
    }else if(x3 == "case2-18"){
        choix4.innerHTML = "Vous estimez que tout le monde peut s’exprimer en manifestant et l’autorisez<br><p style='text-align: center'>ou</p><br>Vous estimez que personne n’a le droit manifester et le censure à la prison";
        casej4 = 218
    }else if(x3 == "case2-19"){
        choix4.innerHTML = "Vous estimez qu’il est crucial d’avoir des ONG, tout le monde peut en créer une ou créer une association/organisation<br><p style='text-align: center'>ou</p><br>Vous interdisez les ONG";
        casej4 = 219;
    }else if(x3 == "case2-20"){
        choix4.innerHTML = "Vous passez sur la case départ : bonus de 500 000 dollars";
        drj4 += 500000;
        dr4.innerHTML = "Dollars : "+ drj4;
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
            ptsj1 -= 4500;
            drj1 += 0;
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
            ptsj1 += 4500;
            drj1 += 0;
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
        }
        pts1.innerHTML = "Points : "+ ptsj1;
        dr1.innerHTML = "Dollars : "+ drj1;
        casej1 = 0;
    }
}

function showpoints2(){
    var y1 =  document.getElementById('choixcases2').value;
    if(y1 == "choix1"){
        if(casej2 == 11){
            ptsj2 += 5000;
            drj2 += 0;
        }else if(casej2 == 12){
            ptsj2 += 7500;
            drj2 -= 50000;
        }else if(casej2 == 13){
            ptsj2 += 2500;
            drj2 -= 150000;
        }else if(casej2 == 14){
            ptsj2 += 4000;
            drj2 -= 200000;
        }else if(casej2 == 16){
            ptsj2 += 2400;
            drj2 -= 200000;
        }else if(casej2 == 17){
            ptsj2 += 1300;
            drj2 -= 130000;
        }else if(casej2 == 18){
            ptsj2 += 3500;
            drj2 -= 350000;
        }else if(casej2 == 19){
            ptsj2 += 1500;
            drj2 -= 150000;
        }else if(casej2 == 111){
            ptsj2 += 5000;
            drj2 -= 500000;
        }else if(casej2 == 112){
            ptsj2 += 2000;
            drj2 -= 200000;
        }else if(casej2 == 113){
            ptsj2 += 1000;
            drj2 -= 100000;
        }else if(casej2 == 114){
            ptsj2 += 500;
            drj2 -= 50000;
        }else if(casej2 == 116){
            ptsj2 += 2500;
            drj2 -= 250000;
        }else if(casej2 == 117){
            ptsj2 += 4500;
            drj2 -= 450000;
        }else if(casej2 == 118){
            ptsj2 += 8000;
            drj2 -= 800000;
        }else if(casej2 == 119){
            ptsj2 -= 4500;
            drj2 += 0;
        }else if(casej2 == 21){
            ptsj2 += 1000;
            drj2 -= 15000;
        }else if(casej2 == 22){
            ptsj2 -= 10000;
            drj2 -= 1500;
        }else if(casej2 == 23){
            ptsj2 += 0;
            drj2 += 3500;
        }else if(casej2 == 24){
            ptsj2 += 500;
            drj2 -= 500000;
        }else if(casej2 == 26){
            ptsj2 -= 800;
            drj2 += 0;
        }else if(casej2 == 27){
            ptsj2 += 5;
            drj2 -= 60000;
        }else if(casej2 == 28){
            ptsj2 += 3500;
            drj2 += 0;
        }else if(casej2 == 29){
            ptsj2 -= 5;
            drj2 -= 150000;
        }else if(casej2 == 211){
            ptsj2 += 1500;
            drj2 -= 30000;
        }else if(casej2 == 212){
            ptsj2 += 5000;
            drj2 -= 50000;
        }else if(casej2 == 213){
            ptsj2 += 5000;
            drj2 -= 50000;
        }else if(casej2 == 214){
            ptsj2 += 5000;
            drj2 -= 50000;
        }else if(casej2 == 216){
            ptsj2 += 5000;
            drj2 -= 50000;
        }else if(casej2 == 217){
            ptsj2 += 1500;
            drj2 -= 10000;
        }else if(casej2 == 218){
            ptsj2 += 2500;
            drj2 += 0;
        }else if(casej2 == 219){
            ptsj2 += 5000;
            drj2 += 0;
        }
        pts2.innerHTML = "Points : "+ ptsj2;
        dr2.innerHTML = "Dollars : "+ drj2;
        casej2 = 0;
    }else if(y1 == "choix2"){
        if(casej2 == 11){
            ptsj2 -= 5000;
            drj2 += 0;
        }else if(casej2 == 12){
            ptsj2 -= 500;
            drj2 += 200000;
        }else if(casej2 == 13){
            ptsj2 -= 500;
            drj2 += 100000;
        }else if(casej2 == 14){
            ptsj2 -= 5000;
            drj2 += 75000;
        }else if(casej2 == 16){
            ptsj2 -= 1000;
            drj2 += 100000;
        }else if(casej2 == 17){
            ptsj2 -= 100;
            drj2 += 10000;
        }else if(casej2 == 18){
            ptsj2 -= 2500;
            drj2 += 250000;
        }else if(casej2 == 19){
            ptsj2 -= 3000;
            drj2 += 0;
        }else if(casej2 == 111){
            ptsj2 += 3500;
            drj2 += 350000;
        }else if(casej2 == 112){
            ptsj2 -= 1500;
            drj2 += 150000;
        }else if(casej2 == 113){
            ptsj2 -= 750;
            drj2 += 75000;
        }else if(casej2 == 114){
            ptsj2 -= 450;
            drj2 += 45000;
        }else if(casej2 == 116){
            ptsj2 -= 2500;
            drj2 += 250000;
        }else if(casej2 == 117){
            ptsj2 -= 4000;
            drj2 += 400000;
        }else if(casej2 == 118){
            ptsj2 -= 5000;
            drj2 += 500000;
        }else if(casej2 == 119){
            ptsj2 += 4500;
            drj2 += 0;
        }else if(casej2 == 21){
            ptsj2 -= 500;
            drj2 += 0;
        }else if(casej2 == 22){
            ptsj2 += 1000;
            drj2 -= 50000;
        }else if(casej2 == 23){
            ptsj2 -= 3500;
            drj2 += 0;
        }else if(casej2 == 24){
            ptsj2 -= 300;
            drj2 += 0;
        }else if(casej2 == 26){
            ptsj2 += 1000;
            drj2 += 0;
        }else if(casej2 == 27){
            ptsj2 += 2000;
            drj2 -= 65000;
        }else if(casej2 == 28){
            ptsj2 -= 1500;
            drj2 += 0;
        }else if(casej2 == 29){
            ptsj2 += 5000;
            drj2 += 0;
        }else if(casej2 == 211){
            ptsj2 -= 3500;
            drj2 += 0;
        }else if(casej2 == 212){
            ptsj2 -= 6000;
            drj2 += 0;
        }else if(casej2 == 213){
            ptsj2 -= 5000;
            drj2 -= 50000;
        }else if(casej2 == 214){
            ptsj2 -= 6000;
            drj2 += 0;
        }else if(casej2 == 216){
            ptsj2 -= 6000;
            drj2 += 0;
        }else if(casej2 == 217){
            ptsj2 -= 4500;
            drj2 += 100000;
        }else if(casej2 == 218){
            ptsj2 -= 2500;
            drj2 -= 50000;
        }else if(casej2 == 219){
            ptsj2 += 5000;
            drj2 += 0;
        }
        pts2.innerHTML = "Points : "+ ptsj2;
        dr2.innerHTML = "Dollars : "+ drj2;
        casej2 = 0;
    }
}

function showpoints3(){
    var y2 =  document.getElementById('choixcases3').value;
    if(y2 == "choix1"){
        if(casej3 == 11){
            ptsj3 += 5000;
            drj3 += 0;
        }else if(casej3 == 12){
            ptsj3 += 7500;
            drj3 -= 50000;
        }else if(casej3 == 13){
            ptsj3 += 2500;
            drj3 -= 150000;
        }else if(casej3 == 14){
            ptsj3 += 4000;
            drj3 -= 200000;
        }else if(casej3 == 16){
            ptsj3 += 2400;
            drj3 -= 200000;
        }else if(casej3 == 17){
            ptsj3 += 1300;
            drj3 -= 130000;
        }else if(casej3 == 18){
            ptsj3 += 3500;
            drj3 -= 350000;
        }else if(casej3 == 19){
            ptsj3 += 1500;
            drj3 -= 150000;
        }else if(casej3 == 111){
            ptsj3 += 5000;
            drj3 -= 500000;
        }else if(casej3 == 112){
            ptsj3 += 2000;
            drj3 -= 200000;
        }else if(casej3 == 113){
            ptsj3 += 1000;
            drj3 -= 100000;
        }else if(casej3 == 114){
            ptsj3 += 500;
            drj3 -= 50000;
        }else if(casej3 == 116){
            ptsj3 += 2500;
            drj3 -= 250000;
        }else if(casej3 == 117){
            ptsj3 += 4500;
            drj3 -= 450000;
        }else if(casej3 == 118){
            ptsj3 += 8000;
            drj3 -= 800000;
        }else if(casej3 == 119){
            ptsj3 -= 4500;
            drj3 += 0;
        }else if(casej3 == 21){
            ptsj3 += 1000;
            drj3 -= 15000;
        }else if(casej3 == 22){
            ptsj3 -= 10000;
            drj3 -= 1500;
        }else if(casej3 == 23){
            ptsj3 += 0;
            drj3 += 3500;
        }else if(casej3 == 24){
            ptsj3 += 500;
            drj3 -= 500000;
        }else if(casej3 == 26){
            ptsj3 -= 800;
            drj3 += 0;
        }else if(casej3 == 27){
            ptsj3 += 5;
            drj3 -= 60000;
        }else if(casej3 == 28){
            ptsj3 += 3500;
            drj3 += 0;
        }else if(casej3 == 29){
            ptsj3 -= 5;
            drj3 -= 150000;
        }else if(casej3 == 211){
            ptsj3 += 1500;
            drj3 -= 30000;
        }else if(casej3 == 212){
            ptsj3 += 5000;
            drj3 -= 50000;
        }else if(casej3 == 213){
            ptsj3 += 5000;
            drj3 -= 50000;
        }else if(casej3 == 214){
            ptsj3 += 5000;
            drj3 -= 50000;
        }else if(casej3 == 216){
            ptsj3 += 5000;
            drj3 -= 50000;
        }else if(casej3 == 217){
            ptsj3 += 1500;
            drj3 -= 10000;
        }else if(casej3 == 218){
            ptsj3 += 2500;
            drj3 += 0;
        }else if(casej3 == 219){
            ptsj3 += 5000;
            drj3 += 0;
        }
        pts3.innerHTML = "Points : "+ ptsj3;
        dr3.innerHTML = "Dollars : "+ drj3;
        casej3 = 0;
    }else if(y2 == "choix2"){
        if(casej3 == 11){
            ptsj3 -= 5000;
            drj3 += 0;
        }else if(casej3 == 12){
            ptsj3 -= 500;
            drj3 += 200000;
        }else if(casej3 == 13){
            ptsj3 -= 500;
            drj3 += 100000;
        }else if(casej3 == 14){
            ptsj3 -= 5000;
            drj3 += 75000;
        }else if(casej3 == 16){
            ptsj3 -= 1000;
            drj3 += 100000;
        }else if(casej3 == 17){
            ptsj3 -= 100;
            drj3 += 10000;
        }else if(casej3 == 18){
            ptsj3 -= 2500;
            drj3 += 250000;
        }else if(casej3 == 19){
            ptsj3 -= 3000;
            drj3 += 0;
        }else if(casej3 == 111){
            ptsj3 += 3500;
            drj3 += 350000;
        }else if(casej3 == 112){
            ptsj3 -= 1500;
            drj3 += 150000;
        }else if(casej3 == 113){
            ptsj3 -= 750;
            drj3 += 75000;
        }else if(casej3 == 114){
            ptsj3 -= 450;
            drj3 += 45000;
        }else if(casej3 == 116){
            ptsj3 -= 2500;
            drj3 += 250000;
        }else if(casej3 == 117){
            ptsj3 -= 4000;
            drj3 += 400000;
        }else if(casej3 == 118){
            ptsj3 -= 5000;
            drj3 += 500000;
        }else if(casej3 == 119){
            ptsj3 += 4500;
            drj3 += 0;
        }else if(casej3 == 21){
            ptsj3 -= 500;
            drj3 += 0;
        }else if(casej3 == 22){
            ptsj3 += 1000;
            drj3 -= 50000;
        }else if(casej3 == 23){
            ptsj3 -= 3500;
            drj3 += 0;
        }else if(casej3 == 24){
            ptsj3 -= 300;
            drj3 += 0;
        }else if(casej3 == 26){
            ptsj3 += 1000;
            drj3 += 0;
        }else if(casej3 == 27){
            ptsj3 += 2000;
            drj3 -= 65000;
        }else if(casej3 == 28){
            ptsj3 -= 1500;
            drj3 += 0;
        }else if(casej3 == 29){
            ptsj3 += 5000;
            drj3 += 0;
        }else if(casej3 == 211){
            ptsj3 -= 3500;
            drj3 += 0;
        }else if(casej3 == 212){
            ptsj3 -= 6000;
            drj3 += 0;
        }else if(casej3 == 213){
            ptsj3 -= 5000;
            drj3 -= 50000;
        }else if(casej3 == 214){
            ptsj3 -= 6000;
            drj3 += 0;
        }else if(casej3 == 216){
            ptsj3 -= 6000;
            drj3 += 0;
        }else if(casej3 == 217){
            ptsj3 -= 4500;
            drj3 += 100000;
        }else if(casej3 == 218){
            ptsj3 -= 2500;
            drj3 -= 50000;
        }else if(casej3 == 219){
            ptsj3 += 5000;
            drj3 += 0;
        }
        pts3.innerHTML = "Points : "+ ptsj3;
        dr3.innerHTML = "Dollars : "+ drj3;
        casej3 = 0;
    }
}

function showpoints4(){
    var y3 =  document.getElementById('choixcases4').value;
    if(y3 == "choix1"){
        if(casej4 == 11){
            ptsj4 += 5000;
            drj4 += 0;
        }else if(casej4 == 12){
            ptsj4 += 7500;
            drj4 -= 50000;
        }else if(casej4 == 13){
            ptsj4 += 2500;
            drj4 -= 150000;
        }else if(casej4 == 14){
            ptsj4 += 4000;
            drj4 -= 200000;
        }else if(casej4 == 16){
            ptsj4 += 2400;
            drj4 -= 200000;
        }else if(casej4 == 17){
            ptsj4 += 1300;
            drj4 -= 130000;
        }else if(casej4 == 18){
            ptsj4 += 3500;
            drj4 -= 350000;
        }else if(casej4 == 19){
            ptsj4 += 1500;
            drj4 -= 150000;
        }else if(casej4 == 111){
            ptsj4 += 5000;
            drj4 -= 500000;
        }else if(casej4 == 112){
            ptsj4 += 2000;
            drj4 -= 200000;
        }else if(casej4 == 113){
            ptsj4 += 1000;
            drj4 -= 100000;
        }else if(casej4 == 114){
            ptsj4 += 500;
            drj4 -= 50000;
        }else if(casej4 == 116){
            ptsj4 += 2500;
            drj4 -= 250000;
        }else if(casej4 == 117){
            ptsj4 += 4500;
            drj4 -= 450000;
        }else if(casej4 == 118){
            ptsj4 += 8000;
            drj4 -= 800000;
        }else if(casej4 == 119){
            ptsj4 -= 4500;
            drj4 += 0;
        }else if(casej4 == 21){
            ptsj4 += 1000;
            drj4 -= 15000;
        }else if(casej4 == 22){
            ptsj4 -= 10000;
            drj4 -= 1500;
        }else if(casej4 == 23){
            ptsj4 += 0;
            drj4 += 3500;
        }else if(casej4 == 24){
            ptsj4 += 500;
            drj4 -= 500000;
        }else if(casej4 == 26){
            ptsj4 -= 800;
            drj4 += 0;
        }else if(casej4 == 27){
            ptsj4 += 5;
            drj4 -= 60000;
        }else if(casej4 == 28){
            ptsj4 += 3500;
            drj4 += 0;
        }else if(casej4 == 29){
            ptsj4 -= 5;
            drj4 -= 150000;
        }else if(casej4 == 211){
            ptsj4 += 1500;
            drj4 -= 30000;
        }else if(casej4 == 212){
            ptsj4 += 5000;
            drj4 -= 50000;
        }else if(casej4 == 213){
            ptsj4 += 5000;
            drj4 -= 50000;
        }else if(casej4 == 214){
            ptsj4 += 5000;
            drj4 -= 50000;
        }else if(casej4 == 216){
            ptsj4 += 5000;
            drj4 -= 50000;
        }else if(casej4 == 217){
            ptsj4 += 1500;
            drj4 -= 10000;
        }else if(casej4 == 218){
            ptsj4 += 2500;
            drj4 += 0;
        }else if(casej4 == 219){
            ptsj4 += 5000;
            drj4 += 0;
        }
        pts4.innerHTML = "Points : "+ ptsj4;
        dr4.innerHTML = "Dollars : "+ drj4;
        casej4 = 0;
    }else if(y3 == "choix2"){
        if(casej4 == 11){
            ptsj4 -= 5000;
            drj4 += 0;
        }else if(casej4 == 12){
            ptsj4 -= 500;
            drj4 += 200000;
        }else if(casej4 == 13){
            ptsj4 -= 500;
            drj4 += 100000;
        }else if(casej4 == 14){
            ptsj4 -= 5000;
            drj4 += 75000;
        }else if(casej4 == 16){
            ptsj4 -= 1000;
            drj4 += 100000;
        }else if(casej4 == 17){
            ptsj4 -= 100;
            drj4 += 10000;
        }else if(casej4 == 18){
            ptsj4 -= 2500;
            drj4 += 250000;
        }else if(casej4 == 19){
            ptsj4 -= 3000;
            drj4 += 0;
        }else if(casej4 == 111){
            ptsj4 += 3500;
            drj4 += 350000;
        }else if(casej4 == 112){
            ptsj4 -= 1500;
            drj4 += 150000;
        }else if(casej4 == 113){
            ptsj4 -= 750;
            drj4 += 75000;
        }else if(casej4 == 114){
            ptsj4 -= 450;
            drj4 += 45000;
        }else if(casej4 == 116){
            ptsj4 -= 2500;
            drj4 += 250000;
        }else if(casej4 == 117){
            ptsj4 -= 4000;
            drj4 += 400000;
        }else if(casej4 == 118){
            ptsj4 -= 5000;
            drj4 += 500000;
        }else if(casej4 == 119){
            ptsj4 += 4500;
            drj4 += 0;
        }else if(casej4 == 21){
            ptsj4 -= 500;
            drj4 += 0;
        }else if(casej4 == 22){
            ptsj4 += 1000;
            drj4 -= 50000;
        }else if(casej4 == 23){
            ptsj4 -= 3500;
            drj4 += 0;
        }else if(casej4 == 24){
            ptsj4 -= 300;
            drj4 += 0;
        }else if(casej4 == 26){
            ptsj4 += 1000;
            drj4 += 0;
        }else if(casej4 == 27){
            ptsj4 += 2000;
            drj4 -= 65000;
        }else if(casej4 == 28){
            ptsj4 -= 1500;
            drj4 += 0;
        }else if(casej4 == 29){
            ptsj4 += 5000;
            drj4 += 0;
        }else if(casej4 == 211){
            ptsj4 -= 3500;
            drj4 += 0;
        }else if(casej4 == 212){
            ptsj4 -= 6000;
            drj4 += 0;
        }else if(casej4 == 213){
            ptsj4 -= 5000;
            drj4 -= 50000;
        }else if(casej4 == 214){
            ptsj4 -= 6000;
            drj4 += 0;
        }else if(casej4 == 216){
            ptsj4 -= 6000;
            drj4 += 0;
        }else if(casej4 == 217){
            ptsj4 -= 4500;
            drj4 += 100000;
        }else if(casej4 == 218){
            ptsj4 -= 2500;
            drj4 -= 50000;
        }else if(casej4 == 219){
            ptsj4 += 5000;
            drj4 += 0;
        }
        pts4.innerHTML = "Points : "+ ptsj4;
        dr4.innerHTML = "Dollars : "+ drj4;
        casej4 = 0;
    }
}

function depart1() {
    drj1 += 1000000
    dr1.innerHTML = "Dollars : "+ drj1;
}

function depart2() {
    drj2 += 1000000
    dr2.innerHTML = "Dollars : "+ drj2;
}

function depart3() {
    drj3 += 1000000
    dr3.innerHTML = "Dollars : "+ drj3;
}

function depart4() {
    drj4 += 1000000
    dr4.innerHTML = "Dollars : "+ drj4;
}
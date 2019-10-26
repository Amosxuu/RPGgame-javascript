
let GameManage = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 200, 0, 200, 100, 50);
                break;
            case "Mage":
                player = new Player(classType, 80, 0, 50, 200, 50);
                break;
            case "Hunter":
                player = new Player(classType, 200, 0, 50, 200, 100);
                break;
            case "Rogue":
                player = new Player(classType, 100, 0, 100, 150, 200);
                break;

        }
        let getInterface = document.querySelector('.interface');
        getInterface.innerHTML = '<div class ="pre-fight"><img src="img/' + classType + '.png" class = "img-avatar"><div class="pre-fight-text"><h3>' + classType + '</h3><p class="health-player">生命: ' + player.health + '</p><p>魔力: ' + player.mana + '</p><p>力量: ' + player.strength + '</p><p>敏捷: ' + player.agility + '</p><p>速度: ' + player.speed + '</p></div></div>';
    },
    setPreFight: function () {
        let getHeader = document.querySelector('.header');
        let getAction = document.querySelector('.action');
        let getArena = document.querySelector('.arena');
        getHeader.innerHTML = '<p>任務: 找到你的敵人!!!</p>';
        getAction.innerHTML = '<a href ="#" class ="btn-prefight" onclick ="GameManage.setFight()" >搜尋怪物</a>';
        getArena.style.visibility = 'visible';

    },

    setFight: function () {
        let getHeader = document.querySelector('.header');
        let getAction = document.querySelector('.action');
        let getEnemy = document.querySelector('.enemy');
        //創建敵人
        let enemy00 = new Enemy('Goblin', 100, 0, 50, 100, 100);
        let enemy01 = new Enemy('Troll', 200, 0, 150, 80, 150);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));

        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
        }

        getHeader.innerHTML = '<p>任務: 戰勝這個怪物</p>';
        getAction.innerHTML = '<a href ="#" class ="btn-prefight" onclick ="PlayerMoves.calcAttack()" >攻擊怪物</a>';
        getEnemy.innerHTML = '<div class="pre-fight"><img src="img/' + enemy.enemyType + '.png" alt ="' + enemy.enemyType + '" class = "img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class = "health-enemy">生命: ' + enemy.health + '</p><p>魔力: ' + enemy.mana + '</p><p>力量: ' + enemy.strength + '</p><p>敏捷: ' + enemy.agility + '</p><p>速度: ' + enemy.speed + '</p></div></div>';
    }


}
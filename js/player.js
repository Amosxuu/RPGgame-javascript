let player;

function Player(classType, health, mana, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.mana = mana;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function () {
        //誰先攻擊?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        // 玩 家 攻 擊!
        let playerAttack = function () {
            let calcBaseDamage;
            if (player.mana > 0) {
                calcBaseDamage = player.strength * player.mana / 1000; //基本攻擊 有魔力
            } else {
                calcBaseDamage = player.strength * player.agility / 1000; //基本攻擊 無魔力
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10)); //加隨機的攻擊
            let calcOutputDamage = calcBaseDamage + offsetDamage; //總攻擊傷害
            //攻擊次數 由敏捷判定                                                         //最低打一次
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues; //回傳這兩個值
        }
        // 敵 人 攻 擊!
        let enemyAttack = function () {
            let calcBaseDamage;
            if (enemy.mana > 0) {
                calcBaseDamage = enemy.strength * enemy.mana / 1000; //基本攻擊 有魔力
            } else {
                calcBaseDamage = enemy.strength * enemy.agility / 1000; //基本攻擊 無魔力
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10)); //加隨機的攻擊
            let calcOutputDamage = calcBaseDamage + offsetDamage; //總攻擊傷害
            //攻擊次數 由敏捷判定                                                         //最低打一次
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues; //回傳這兩個值
        }
        // 給玩家與敵人生命 之後會改變

        let getplayerHealth = document.querySelector('.health-player');
        let getenemyHealth = document.querySelector('.health-enemy');

        //初始化攻擊 比攻擊速度
        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1]; //攻擊傷害 * 次數
            enemy.health = enemy.health - totalDamage;
            alert('你造成了' + playerAttackValues[0] + ' 點傷害 ' + '並攻擊了' + playerAttackValues[1] + ' 次 ' + ' 總傷害為 ' + totalDamage);

            if (enemy.health <= 0) {
                alert('你贏了 重新整理網頁在玩一次');
                getplayerHealth.innerHTML = '生命: ' + player.health;
                getenemyHealth.innerHTML = '生命: 0';
            } else {
                getenemyHealth.innerHTML = '生命: ' + enemy.health;

                let enemyAttackValues = enemyAttack();
                totalDamage = enemyAttackValues[0] * enemyAttackValues[1]; //攻擊傷害 * 次數
                player.health = player.health - totalDamage;
                alert('敵人造成了' + enemyAttackValues[0] + ' 點傷害 ' + '並攻擊了' + enemyAttackValues[1] + ' 次 ' + ' 總傷害為 ' + totalDamage);

                if (player.health <= 0) {
                    alert('你輸了 重新整理網頁在玩一次');
                    getplayerHealth.innerHTML = '生命: 0';
                    getenemyHealth.innerHTML = '生命: ' + enemy.health;
                } else {
                    getplayerHealth.innerHTML = '生命: ' + player.health;
                }

            }



        } else if (getEnemySpeed > getPlayerSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1]; //攻擊傷害 * 次數
            player.health = player.health - totalDamage;
            alert('敵人造成了' + enemyAttackValues[0] + ' 點傷害 ' + '並攻擊了' + enemyAttackValues[1] + ' 次 ' + ' 總傷害為 ' + totalDamage);

            if (player.health <= 0) {
                alert('你輸了 重新整理網頁在玩一次');
                getplayerHealth.innerHTML = '生命: 0';
                getenemyHealth.innerHTML = '生命: ' + enemy.health;
                
            } else {
                getplayerHealth.innerHTML = '生命: ' + player.health;

                let playeryAttackValues = playerAttack();
                totalDamage = playeryAttackValues[0] * playeryAttackValues[1]; //攻擊傷害 * 次數
                enemy.health = enemy.health - totalDamage;
                alert('你造成了' + playeryAttackValues[0] + ' 點傷害 ' + '並攻擊了' + playeryAttackValues[1] + ' 次 ' + ' 總傷害為 ' + totalDamage);

                if (enemy.health <= 0) {
                    alert('你贏了 重新整理網頁在玩一次');
                    getenemyHealth.innerHTML = '生命: 0';
                    getplayerHealth.innerHTML = '生命: ' + player.health;
                } else {
                    getenemyHealth.innerHTML = '生命: ' + enemy.health;
                }
            }


        }
    }
}
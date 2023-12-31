-- CreateTable
CREATE TABLE `animais` (
    `animal_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` CHAR(100) NOT NULL,
    `tipo` CHAR(100) NOT NULL,
    `proprietario_id` INTEGER NOT NULL,

    INDEX `fk_proprietarios`(`proprietario_id`),
    PRIMARY KEY (`animal_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proprietarios` (
    `proprietario_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` CHAR(100) NOT NULL,
    `telefone` CHAR(100) NOT NULL,

    PRIMARY KEY (`proprietario_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `animais` ADD CONSTRAINT `fk_proprietarios` FOREIGN KEY (`proprietario_id`) REFERENCES `proprietarios`(`proprietario_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;


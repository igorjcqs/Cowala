-- CreateTable
CREATE TABLE `conversionRegistry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `originalCurrency` VARCHAR(191) NOT NULL,
    `convertedCurrency` VARCHAR(191) NOT NULL,
    `valueSended` DECIMAL(65, 30) NOT NULL,
    `valueConverted` DECIMAL(65, 30) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `auth_key` (
	`id` varchar(255) PRIMARY KEY NOT NULL,
	`user_id` varchar(15) NOT NULL,
	`primary_key` tinyint NOT NULL,
	`hashed_password` varchar(255),
	`expires` bigint
);
--> statement-breakpoint
CREATE TABLE `auth_session` (
	`id` varchar(127) PRIMARY KEY NOT NULL,
	`user_id` varchar(15) NOT NULL,
	`active_expires` bigint NOT NULL,
	`idle_expires` bigint NOT NULL
);
--> statement-breakpoint
CREATE TABLE `auth_user` (
	`id` varchar(15) PRIMARY KEY NOT NULL,
	`email` varchar(255) NOT NULL,
	`is_admin` boolean NOT NULL DEFAULT false
);

exports.pluginOptionsSchema = ({Joi}) => {
	return Joi.object({
		comment: Joi.alternatives()
			.try(Joi.string(), Joi.boolean())
			.description('Comment number support.'),
		pageview: Joi.alternatives()
			.try(Joi.string(), Joi.boolean())
			.description('Article reading statistics.'),
		serverURL: Joi.string().description('Waline server address url.'),
		path: Joi.string().description(
			'Article path id. Used to distinguish different _article pages_ to ensure loading the correct comment list under the _article page_.',
		),
		meta: Joi.array()
			.items(Joi.string().valid('nick', 'mail', 'link'))
			.description('Reviewer attributes.'),
		requiredMeta: Joi.array()
			.items(Joi.string().valid('nick', 'mail', 'link'))
			.description('Set required fields, default anonymous.'),
		wordLimit: Joi.alternatives()
			.try(Joi.number(), Joi.array().items(Joi.number()))
			.description(
				"Comment word s limit. When a single number is filled in, it 's the maximum number of comment words.",
			),
		pageSize: Joi.number().description('Number of pages per page.'),
		pageview: Joi.alternatives()
			.try(Joi.string(), Joi.boolean())
			.description('Pageview number support.'),
		lang: Joi.string().description('Display language for waline.'),
		locale: Joi.object().description('Custom display language in waline.'),
		commentSorting: Joi.string()
			.valid('latest', 'oldest', 'hottest')
			.description('Sorting method for comment list.'),
		dark: Joi.alternatives()
			.try(Joi.string(), Joi.boolean())
			.description('Whether to enable darkmode support.'),
		emoji: Joi.alternatives()
			.try(Joi.array(), Joi.object())
			.description('Set Emojis'),
		search: Joi.alternatives()
			.try(Joi.object(), Joi.boolean())
			.description('Customize Search feature.'),
		highlighter: Joi.alternatives()
			.try(Joi.object(), Joi.boolean())
			.description('Code highlighting.'),
		imageUploader: Joi.alternatives()
			.try(Joi.object(), Joi.boolean())
			.description(
				'Custom image upload callback to manage picture by yourself.',
			),
		texRenderer: Joi.alternatives()
			.try(Joi.object(), Joi.boolean())
			.description('Custom math formula parse callback for preview.'),
		login: Joi.string()
			.valid('enable', 'disable', 'force')
			.description('Login mode status.'),
		copyright: Joi.boolean().description(
			'Whether show copyright in footer.',
		),
		recaptchaV3Key: Joi.string().description('recaptcha v3 client key.'),
		reaction: Joi.alternatives()
			.try(Joi.array().items(Joi.string()), Joi.boolean())
			.description('reaction.'),
	});
};

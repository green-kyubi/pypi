class Singularity():

    UNIVERSE_NAME = 'Singularity'

    UNIVERSE_TREE = {
        'pagename': "singularity",
        'badge': "https://source.unsplash.com/collection/4838728/222x222/",
        'universes': None, #['Universe'],
        'galaxies': None, #['Galaxy'],
        'solaris': None, #...
        'terrae': None, #...
    }

    def __str__(self):
        return self.UNIVERSE_NAME

    def __init__(self, *args, **kwargs):
        pass

    def get_stelar_objects(self, **kwargs):

        cluster = kwargs.pop('cluster', 'universes')

        response = []

        if cluster in ['universes', 'galaxies', 'solaris', 'terrae']:

            models = self.UNIVERSE_TREE[cluster]

            if models:

                for model in models:

                    try:
                        print(model)
                        model_objects = eval(model).objects.all()
                    except:
                        return models

                    for model_object in model_objects:
                        response.append(model_object)

        print(response)
        return response


    def get_universes(self):
        return self.get_stelar_objects(cluster='universes')

    def get_galaxies(self):
        return self.get_stelar_objects(cluster='galaxies')

    def get_solaris(self):
        return self.get_stelar_objects(cluster='solaris')

    def get_terrae(self):
        return self.get_stelar_objects(cluster='terrae')

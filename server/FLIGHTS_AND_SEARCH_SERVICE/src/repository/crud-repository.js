class CrudRepository {
    
    constructor(model,name){
        this.model = model;
        this.name = name;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log(`${this.name} : Something went wrong in crud repository layer`);
            throw {error};
        }
    }

    async get(modelId) {
        try {
            const result  = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log(`${this.name} : Something went wrong in crud repository layer`);
            throw {error};
        }
    }

    async getAll() {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log(`${this.name} : Something went wrong in crud repository layer`);
            throw {error};
        }
    }

    async update(modelId,data) {
        try {
            // In mysql we can use following approach to get updated object
            /**
             * const model = await this.model.findByPk(modelId);
             * model.name = data.name;
             * or model.address = data.address, etc;
             * await model.save();   
            */

            // Following approach doesn't return updated object
            //In pgsql we can use returning:true for same issue and does return an updated object
            await this.model.update(data, {
                where:{
                    id: modelId,
                }
            });
            return true;
        } catch (error) {
            console.log(`${this.name} : Something went wrong in crud repository layer`);
            throw {error};
        }
    }

    async destroy(modelId) {
        try {
            await this.model.destroy({
                where: {
                  id: modelId,
                },
              });
              return true;
        } catch (error) {
            console.log(`${this.name} : Something went wrong in crud repository layer`);
            throw {error};
        }
    }
}

module.exports = CrudRepository;
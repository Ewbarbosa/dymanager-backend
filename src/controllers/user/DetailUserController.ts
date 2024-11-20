import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
  async handle(req: Request, res: Response) {
    const userId = req.user_id;

    //const { userId } = req.params;

    const detailUserService = new DetailUserService();

    const user = await detailUserService.execute(parseInt(userId));

    return res.status(200).json(user);
  }
}

export { DetailUserController };

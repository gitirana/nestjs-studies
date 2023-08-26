import { Controller, Post, UseGuards, UsePipes } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import { z } from "zod";

const createQuestionBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type CreateQuestionSchema = z.infer<typeof createQuestionBodySchema>;

@Controller("/questions")
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  @Post()
  async handle() {
    return "ok";
  }
}
